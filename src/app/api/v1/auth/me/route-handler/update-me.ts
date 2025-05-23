import "server-only";

import type { ApiHandlerCallBackFunctionType } from "next-vibe/server/endpoints/core/api-handler";
import type { UndefinedType } from "next-vibe/shared/types/common.schema";

import { db } from "../../../../db";
import type { UserResponseType, UserUpdateRequestType } from "../schema";
import { getFullUser } from "./get-me";

export const updateUser: ApiHandlerCallBackFunctionType<
  UserUpdateRequestType,
  UserResponseType,
  UndefinedType
> = async ({
  user: { id },
  data: { firstName, lastName, imageUrl, email },
}) => {
  const existingUser = await db.user.findUnique({ where: { id } });
  if (!existingUser) {
    return {
      success: false,
      message: "Email already registered",
      errorCode: 400,
    } as {
      success: false;
      message: string;
      errorCode: number;
      data?: never;
    };
  }
  await db.user.update({
    where: { id },
    data: {
      email,
      firstName,
      lastName,
      imageUrl: imageUrl ?? null,
    },
  });
  const fullUser = await getFullUser(id);
  return {
    success: true,
    data: fullUser as UserResponseType,
  };
};
