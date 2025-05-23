import { undefinedSchema } from "next-vibe/shared/types/common.schema";
import { Methods } from "next-vibe/shared/types/endpoint";
import { UserRoleValue } from "next-vibe/shared/types/enums";
import { messageResponseSchema } from "next-vibe/shared/types/response.schema";

import { createEndpoint } from "@/packages/next-vibe/client/endpoint";

import registerEndpoint from "../register/definition";
import { resetPasswordRequestSchema } from "./schema";

const resetPasswordEndpoint = createEndpoint({
  description: "Send a password reset email",
  method: Methods.POST,
  path: ["v1", "auth", "public", "reset-password"],
  requestSchema: resetPasswordRequestSchema,
  responseSchema: messageResponseSchema,

  examples: {
    payloads: {
      default: {
        id: "9bfb43b8-c361-4f3e-b512-ec2ced9bf687",
        email: registerEndpoint.POST.examples.payloads.default.email,
      },
      example1: {
        id: "9bfb43b8-c361-4f3e-b512-ec2ced9bf688",
        email: registerEndpoint.POST.examples.payloads.customer.email,
      },
    },
    urlPathVariables: undefined,
  },
  apiQueryOptions: {
    queryKey: ["reset-password"],
  },
  fieldDescriptions: {
    email: "Email address",
  },
  errorCodes: {
    500: "Internal server error",
    400: "Invalid request data",
  },
  allowedRoles: [UserRoleValue.PUBLIC],
  requestUrlSchema: undefinedSchema,
});
export default resetPasswordEndpoint;
