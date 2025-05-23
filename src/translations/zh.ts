import type { TranslationSchema } from "./index";

// Chinese translations
const translations: TranslationSchema = {
  common: {
    appName: "OpenEats",
    openSource: "开源",
    search: "搜索",
    filter: "筛选",
    loading: "加载中...",
    noResults: "没有找到结果",
    clearFilters: "清除筛选",
    applyFilters: "应用筛选",
    error: "错误",
    success: "成功",
    cancel: "取消",
    submit: "提交",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    add: "添加",
    remove: "移除",
    close: "关闭",
    back: "返回",
    next: "下一步",
    previous: "上一步",
    continue: "继续",
    goBack: "返回",
    viewAll: "查看全部",
    seeMore: "查看更多",
    seeLess: "查看更少",
    showMore: "显示更多",
    showLess: "显示更少",
    readMore: "阅读更多",
    readLess: "阅读更少",
    learnMore: "了解更多",
    getStarted: "开始",
    signIn: "登录",
    signOut: "登出",
    signUp: "注册",
    register: "注册",
    login: "登录",
    logout: "登出",
    myAccount: "我的账户",
    myProfile: "我的个人资料",

    addAddress: "添加地址",
    editAddress: "编辑地址",
    removeAddress: "移除地址",
    address: "地址",
    addressLine1: "地址行1",
    addressLine2: "地址行2",
    city: "城市",
    state: "州/省",
    zipCode: "邮政编码",
    country: "国家",
    phoneNumber: "电话号码",
    email: "电子邮件",
    password: "密码",
    confirmPassword: "确认密码",
    forgotPassword: "忘记密码？",
    resetPassword: "重置密码",
    changePassword: "更改密码",
    currentPassword: "当前密码",
    newPassword: "新密码",
    confirmNewPassword: "确认新密码",
    rememberMe: "记住我",
    stayLoggedIn: "保持登录状态",
    dontHaveAccount: "没有账户？",
    alreadyHaveAccount: "已有账户？",
    createAccount: "创建账户",
    createPassword: "创建密码",
    firstName: "名",
    lastName: "姓",
    fullName: "全名",
    username: "用户名",
    bio: "简介",
    website: "网站",
    socialMedia: "社交媒体",
    facebook: "Facebook",
    twitter: "Twitter",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    tiktok: "TikTok",
    snapchat: "Snapchat",
    pinterest: "Pinterest",
    reddit: "Reddit",
    github: "GitHub",
    discord: "Discord",
  },

  // Navigation
  nav: {
    home: "首页",
    restaurants: "餐厅",
    markets: "市场",
    localShops: "本地商店",
    partners: "合作伙伴",
    drivers: "司机",
    about: "关于",
    profile: "个人资料",
    orders: "订单",
    favorites: "收藏",
    cart: "购物车",
    signIn: "登录",
    signOut: "登出",
    backToOpenEats: "返回 OpenEats",
    searchPlaceholder: "搜索食物、餐厅...",
    toggleMenu: "切换菜单",
    lightMode: "浅色模式",
    darkMode: "深色模式",
    theme: "主题",
  },

  // Language names (for language selector)
  languages: {
    en: "English",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
  },

  profile: {
    title: "我的个人资料",
    personalInfo: "个人信息",
    name: "姓名",
    email: "电子邮件",
    phone: "电话",
    addresses: "地址",
    addAddress: "添加地址",
    editAddress: "编辑地址",
    deleteAddress: "删除地址",
    defaultAddress: "默认地址",
    makeDefault: "设为默认",
    paymentMethods: "支付方式",
    addPaymentMethod: "添加支付方式",
    editPaymentMethod: "编辑支付方式",
    deletePaymentMethod: "删除支付方式",
    defaultPaymentMethod: "默认支付方式",
    preferences: "偏好设置",
    language: "语言",
    notifications: "通知",
    emailNotifications: "电子邮件通知",
    pushNotifications: "推送通知",
    smsNotifications: "短信通知",
    saveChanges: "保存更改",
    saving: "正在保存...",
    changesSaved: "更改已保存",
    changesSavedDescription: "您的更改已成功保存",
    changesFailed: "更改失败",
    changesFailedDescription: "保存您的更改时出现错误。请重试。",
  },
  auth: {
    login: {
      title: "欢迎回来",
      subtitle: "登录您的账户以继续",
      emailLabel: "电子邮件",
      emailPlaceholder: "输入您的电子邮件",
      passwordLabel: "密码",
      passwordPlaceholder: "输入您的密码",
      rememberMe: "记住我",
      forgotPassword: "忘记密码？",
      loginButton: "登录",
      noAccount: "没有账户？",
      createAccount: "创建账户",
      loginError: "电子邮件或密码无效",
      or: "",
    },
    signup: {
      title: "创建账户",
      subtitle: "注册以开始使用OpenEats",
      firstNameLabel: "名",
      firstNamePlaceholder: "输入您的名",
      lastNameLabel: "姓",
      lastNamePlaceholder: "输入您的姓",
      emailLabel: "电子邮件",
      emailPlaceholder: "输入您的电子邮件",
      passwordLabel: "密码",
      passwordPlaceholder: "创建密码",
      confirmPasswordLabel: "确认密码",
      confirmPasswordPlaceholder: "确认您的密码",
      termsAndConditions: "条款和条件",
      privacyPolicy: "隐私政策",
      agreeToTerms: "我同意{0}和{1}",
      createAccountButton: "创建账户",
      alreadyHaveAccount: "已有账户？",
      signIn: "登录",
      signupError: "创建账户时出错",
      passwordRequirements: "密码必须至少有8个字符",
      passwordsMustMatch: "密码必须匹配",
      or: "",
    },
    verifyEmail: {
      title: "验证您的电子邮件",
      subtitle: "请验证您的电子邮件地址以继续",
      checkInbox: "我们已向{email}发送了验证链接",
      didNotReceiveEmail: "没有收到电子邮件？",
      resendEmail: "重新发送验证邮件",
      emailResent: "邮件已成功重新发送",
    },
    resetPassword: {
      title: "重置密码",
      subtitle: "输入您的电子邮件以接收密码重置链接",
      emailLabel: "电子邮件",
      emailPlaceholder: "输入您的电子邮件",
      submitButton: "发送重置链接",
      backToLogin: "返回登录",
      emailSent: "密码重置邮件已发送",
      checkInbox: "请检查您的收件箱获取进一步说明",
    },
  },
};

export default translations;
