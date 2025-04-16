/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as WelcomeIndexImport } from "./routes/welcome/index";
import { Route as WelcomeSignupImport } from "./routes/welcome/signup";
import { Route as WelcomeSigninImport } from "./routes/welcome/signin";
import { Route as HomeUpdatesImport } from "./routes/home/updates";
import { Route as HomeInboxImport } from "./routes/home/inbox";
import { Route as HomeDashboardImport } from "./routes/home/dashboard";
import { Route as HomeActivityImport } from "./routes/home/activity";
import { Route as HomeAccountsImport } from "./routes/home/accounts";
import { Route as HomeServiceIndexImport } from "./routes/home/service/index";
import { Route as HomeProfileIndexImport } from "./routes/home/profile/index";
import { Route as HomeServiceTransferImport } from "./routes/home/service/transfer";
import { Route as HomeServicePayBillsImport } from "./routes/home/service/pay-bills";
import { Route as HomeServiceLoanImport } from "./routes/home/service/loan";
import { Route as HomeProfileWalletImport } from "./routes/home/profile/wallet";
import { Route as HomeProfileSettingsImport } from "./routes/home/profile/settings";
import { Route as HomeServiceBillersWaterUtilitiesImport } from "./routes/home/service/billers/water-utilities";
import { Route as HomeServiceBillersLoansImport } from "./routes/home/service/billers/loans";
import { Route as HomeServiceBillersInternetImport } from "./routes/home/service/billers/internet";
import { Route as HomeServiceBillersInsuranceImport } from "./routes/home/service/billers/insurance";
import { Route as HomeServiceBillersElectricUtilitiesImport } from "./routes/home/service/billers/electric-utilities";
import { Route as HomeServiceBillersCreditCardImport } from "./routes/home/service/billers/credit-card";

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const WelcomeIndexRoute = WelcomeIndexImport.update({
  id: "/welcome/",
  path: "/welcome/",
  getParentRoute: () => rootRoute,
} as any);

const WelcomeSignupRoute = WelcomeSignupImport.update({
  id: "/welcome/signup",
  path: "/welcome/signup",
  getParentRoute: () => rootRoute,
} as any);

const WelcomeSigninRoute = WelcomeSigninImport.update({
  id: "/welcome/signin",
  path: "/welcome/signin",
  getParentRoute: () => rootRoute,
} as any);

const HomeUpdatesRoute = HomeUpdatesImport.update({
  id: "/home/updates",
  path: "/home/updates",
  getParentRoute: () => rootRoute,
} as any);

const HomeInboxRoute = HomeInboxImport.update({
  id: "/home/inbox",
  path: "/home/inbox",
  getParentRoute: () => rootRoute,
} as any);

const HomeDashboardRoute = HomeDashboardImport.update({
  id: "/home/dashboard",
  path: "/home/dashboard",
  getParentRoute: () => rootRoute,
} as any);

const HomeActivityRoute = HomeActivityImport.update({
  id: "/home/activity",
  path: "/home/activity",
  getParentRoute: () => rootRoute,
} as any);

const HomeAccountsRoute = HomeAccountsImport.update({
  id: "/home/accounts",
  path: "/home/accounts",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceIndexRoute = HomeServiceIndexImport.update({
  id: "/home/service/",
  path: "/home/service/",
  getParentRoute: () => rootRoute,
} as any);

const HomeProfileIndexRoute = HomeProfileIndexImport.update({
  id: "/home/profile/",
  path: "/home/profile/",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceTransferRoute = HomeServiceTransferImport.update({
  id: "/home/service/transfer",
  path: "/home/service/transfer",
  getParentRoute: () => rootRoute,
} as any);

const HomeServicePayBillsRoute = HomeServicePayBillsImport.update({
  id: "/home/service/pay-bills",
  path: "/home/service/pay-bills",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceLoanRoute = HomeServiceLoanImport.update({
  id: "/home/service/loan",
  path: "/home/service/loan",
  getParentRoute: () => rootRoute,
} as any);

const HomeProfileWalletRoute = HomeProfileWalletImport.update({
  id: "/home/profile/wallet",
  path: "/home/profile/wallet",
  getParentRoute: () => rootRoute,
} as any);

const HomeProfileSettingsRoute = HomeProfileSettingsImport.update({
  id: "/home/profile/settings",
  path: "/home/profile/settings",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersWaterUtilitiesRoute = HomeServiceBillersWaterUtilitiesImport.update({
  id: "/home/service/billers/water-utilities",
  path: "/home/service/billers/water-utilities",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersLoansRoute = HomeServiceBillersLoansImport.update({
  id: "/home/service/billers/loans",
  path: "/home/service/billers/loans",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersInternetRoute = HomeServiceBillersInternetImport.update({
  id: "/home/service/billers/internet",
  path: "/home/service/billers/internet",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersInsuranceRoute = HomeServiceBillersInsuranceImport.update({
  id: "/home/service/billers/insurance",
  path: "/home/service/billers/insurance",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersElectricUtilitiesRoute = HomeServiceBillersElectricUtilitiesImport.update({
  id: "/home/service/billers/electric-utilities",
  path: "/home/service/billers/electric-utilities",
  getParentRoute: () => rootRoute,
} as any);

const HomeServiceBillersCreditCardRoute = HomeServiceBillersCreditCardImport.update({
  id: "/home/service/billers/credit-card",
  path: "/home/service/billers/credit-card",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/home/accounts": {
      id: "/home/accounts";
      path: "/home/accounts";
      fullPath: "/home/accounts";
      preLoaderRoute: typeof HomeAccountsImport;
      parentRoute: typeof rootRoute;
    };
    "/home/activity": {
      id: "/home/activity";
      path: "/home/activity";
      fullPath: "/home/activity";
      preLoaderRoute: typeof HomeActivityImport;
      parentRoute: typeof rootRoute;
    };
    "/home/dashboard": {
      id: "/home/dashboard";
      path: "/home/dashboard";
      fullPath: "/home/dashboard";
      preLoaderRoute: typeof HomeDashboardImport;
      parentRoute: typeof rootRoute;
    };
    "/home/inbox": {
      id: "/home/inbox";
      path: "/home/inbox";
      fullPath: "/home/inbox";
      preLoaderRoute: typeof HomeInboxImport;
      parentRoute: typeof rootRoute;
    };
    "/home/updates": {
      id: "/home/updates";
      path: "/home/updates";
      fullPath: "/home/updates";
      preLoaderRoute: typeof HomeUpdatesImport;
      parentRoute: typeof rootRoute;
    };
    "/welcome/signin": {
      id: "/welcome/signin";
      path: "/welcome/signin";
      fullPath: "/welcome/signin";
      preLoaderRoute: typeof WelcomeSigninImport;
      parentRoute: typeof rootRoute;
    };
    "/welcome/signup": {
      id: "/welcome/signup";
      path: "/welcome/signup";
      fullPath: "/welcome/signup";
      preLoaderRoute: typeof WelcomeSignupImport;
      parentRoute: typeof rootRoute;
    };
    "/welcome/": {
      id: "/welcome/";
      path: "/welcome";
      fullPath: "/welcome";
      preLoaderRoute: typeof WelcomeIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/home/profile/settings": {
      id: "/home/profile/settings";
      path: "/home/profile/settings";
      fullPath: "/home/profile/settings";
      preLoaderRoute: typeof HomeProfileSettingsImport;
      parentRoute: typeof rootRoute;
    };
    "/home/profile/wallet": {
      id: "/home/profile/wallet";
      path: "/home/profile/wallet";
      fullPath: "/home/profile/wallet";
      preLoaderRoute: typeof HomeProfileWalletImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/loan": {
      id: "/home/service/loan";
      path: "/home/service/loan";
      fullPath: "/home/service/loan";
      preLoaderRoute: typeof HomeServiceLoanImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/pay-bills": {
      id: "/home/service/pay-bills";
      path: "/home/service/pay-bills";
      fullPath: "/home/service/pay-bills";
      preLoaderRoute: typeof HomeServicePayBillsImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/transfer": {
      id: "/home/service/transfer";
      path: "/home/service/transfer";
      fullPath: "/home/service/transfer";
      preLoaderRoute: typeof HomeServiceTransferImport;
      parentRoute: typeof rootRoute;
    };
    "/home/profile/": {
      id: "/home/profile/";
      path: "/home/profile";
      fullPath: "/home/profile";
      preLoaderRoute: typeof HomeProfileIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/": {
      id: "/home/service/";
      path: "/home/service";
      fullPath: "/home/service";
      preLoaderRoute: typeof HomeServiceIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/credit-card": {
      id: "/home/service/billers/credit-card";
      path: "/home/service/billers/credit-card";
      fullPath: "/home/service/billers/credit-card";
      preLoaderRoute: typeof HomeServiceBillersCreditCardImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/electric-utilities": {
      id: "/home/service/billers/electric-utilities";
      path: "/home/service/billers/electric-utilities";
      fullPath: "/home/service/billers/electric-utilities";
      preLoaderRoute: typeof HomeServiceBillersElectricUtilitiesImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/insurance": {
      id: "/home/service/billers/insurance";
      path: "/home/service/billers/insurance";
      fullPath: "/home/service/billers/insurance";
      preLoaderRoute: typeof HomeServiceBillersInsuranceImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/internet": {
      id: "/home/service/billers/internet";
      path: "/home/service/billers/internet";
      fullPath: "/home/service/billers/internet";
      preLoaderRoute: typeof HomeServiceBillersInternetImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/loans": {
      id: "/home/service/billers/loans";
      path: "/home/service/billers/loans";
      fullPath: "/home/service/billers/loans";
      preLoaderRoute: typeof HomeServiceBillersLoansImport;
      parentRoute: typeof rootRoute;
    };
    "/home/service/billers/water-utilities": {
      id: "/home/service/billers/water-utilities";
      path: "/home/service/billers/water-utilities";
      fullPath: "/home/service/billers/water-utilities";
      preLoaderRoute: typeof HomeServiceBillersWaterUtilitiesImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/home/accounts": typeof HomeAccountsRoute;
  "/home/activity": typeof HomeActivityRoute;
  "/home/dashboard": typeof HomeDashboardRoute;
  "/home/inbox": typeof HomeInboxRoute;
  "/home/updates": typeof HomeUpdatesRoute;
  "/welcome/signin": typeof WelcomeSigninRoute;
  "/welcome/signup": typeof WelcomeSignupRoute;
  "/welcome": typeof WelcomeIndexRoute;
  "/home/profile/settings": typeof HomeProfileSettingsRoute;
  "/home/profile/wallet": typeof HomeProfileWalletRoute;
  "/home/service/loan": typeof HomeServiceLoanRoute;
  "/home/service/pay-bills": typeof HomeServicePayBillsRoute;
  "/home/service/transfer": typeof HomeServiceTransferRoute;
  "/home/profile": typeof HomeProfileIndexRoute;
  "/home/service": typeof HomeServiceIndexRoute;
  "/home/service/billers/credit-card": typeof HomeServiceBillersCreditCardRoute;
  "/home/service/billers/electric-utilities": typeof HomeServiceBillersElectricUtilitiesRoute;
  "/home/service/billers/insurance": typeof HomeServiceBillersInsuranceRoute;
  "/home/service/billers/internet": typeof HomeServiceBillersInternetRoute;
  "/home/service/billers/loans": typeof HomeServiceBillersLoansRoute;
  "/home/service/billers/water-utilities": typeof HomeServiceBillersWaterUtilitiesRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/home/accounts": typeof HomeAccountsRoute;
  "/home/activity": typeof HomeActivityRoute;
  "/home/dashboard": typeof HomeDashboardRoute;
  "/home/inbox": typeof HomeInboxRoute;
  "/home/updates": typeof HomeUpdatesRoute;
  "/welcome/signin": typeof WelcomeSigninRoute;
  "/welcome/signup": typeof WelcomeSignupRoute;
  "/welcome": typeof WelcomeIndexRoute;
  "/home/profile/settings": typeof HomeProfileSettingsRoute;
  "/home/profile/wallet": typeof HomeProfileWalletRoute;
  "/home/service/loan": typeof HomeServiceLoanRoute;
  "/home/service/pay-bills": typeof HomeServicePayBillsRoute;
  "/home/service/transfer": typeof HomeServiceTransferRoute;
  "/home/profile": typeof HomeProfileIndexRoute;
  "/home/service": typeof HomeServiceIndexRoute;
  "/home/service/billers/credit-card": typeof HomeServiceBillersCreditCardRoute;
  "/home/service/billers/electric-utilities": typeof HomeServiceBillersElectricUtilitiesRoute;
  "/home/service/billers/insurance": typeof HomeServiceBillersInsuranceRoute;
  "/home/service/billers/internet": typeof HomeServiceBillersInternetRoute;
  "/home/service/billers/loans": typeof HomeServiceBillersLoansRoute;
  "/home/service/billers/water-utilities": typeof HomeServiceBillersWaterUtilitiesRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/home/accounts": typeof HomeAccountsRoute;
  "/home/activity": typeof HomeActivityRoute;
  "/home/dashboard": typeof HomeDashboardRoute;
  "/home/inbox": typeof HomeInboxRoute;
  "/home/updates": typeof HomeUpdatesRoute;
  "/welcome/signin": typeof WelcomeSigninRoute;
  "/welcome/signup": typeof WelcomeSignupRoute;
  "/welcome/": typeof WelcomeIndexRoute;
  "/home/profile/settings": typeof HomeProfileSettingsRoute;
  "/home/profile/wallet": typeof HomeProfileWalletRoute;
  "/home/service/loan": typeof HomeServiceLoanRoute;
  "/home/service/pay-bills": typeof HomeServicePayBillsRoute;
  "/home/service/transfer": typeof HomeServiceTransferRoute;
  "/home/profile/": typeof HomeProfileIndexRoute;
  "/home/service/": typeof HomeServiceIndexRoute;
  "/home/service/billers/credit-card": typeof HomeServiceBillersCreditCardRoute;
  "/home/service/billers/electric-utilities": typeof HomeServiceBillersElectricUtilitiesRoute;
  "/home/service/billers/insurance": typeof HomeServiceBillersInsuranceRoute;
  "/home/service/billers/internet": typeof HomeServiceBillersInternetRoute;
  "/home/service/billers/loans": typeof HomeServiceBillersLoansRoute;
  "/home/service/billers/water-utilities": typeof HomeServiceBillersWaterUtilitiesRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/home/accounts"
    | "/home/activity"
    | "/home/dashboard"
    | "/home/inbox"
    | "/home/updates"
    | "/welcome/signin"
    | "/welcome/signup"
    | "/welcome"
    | "/home/profile/settings"
    | "/home/profile/wallet"
    | "/home/service/loan"
    | "/home/service/pay-bills"
    | "/home/service/transfer"
    | "/home/profile"
    | "/home/service"
    | "/home/service/billers/credit-card"
    | "/home/service/billers/electric-utilities"
    | "/home/service/billers/insurance"
    | "/home/service/billers/internet"
    | "/home/service/billers/loans"
    | "/home/service/billers/water-utilities";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/home/accounts"
    | "/home/activity"
    | "/home/dashboard"
    | "/home/inbox"
    | "/home/updates"
    | "/welcome/signin"
    | "/welcome/signup"
    | "/welcome"
    | "/home/profile/settings"
    | "/home/profile/wallet"
    | "/home/service/loan"
    | "/home/service/pay-bills"
    | "/home/service/transfer"
    | "/home/profile"
    | "/home/service"
    | "/home/service/billers/credit-card"
    | "/home/service/billers/electric-utilities"
    | "/home/service/billers/insurance"
    | "/home/service/billers/internet"
    | "/home/service/billers/loans"
    | "/home/service/billers/water-utilities";
  id:
    | "__root__"
    | "/"
    | "/home/accounts"
    | "/home/activity"
    | "/home/dashboard"
    | "/home/inbox"
    | "/home/updates"
    | "/welcome/signin"
    | "/welcome/signup"
    | "/welcome/"
    | "/home/profile/settings"
    | "/home/profile/wallet"
    | "/home/service/loan"
    | "/home/service/pay-bills"
    | "/home/service/transfer"
    | "/home/profile/"
    | "/home/service/"
    | "/home/service/billers/credit-card"
    | "/home/service/billers/electric-utilities"
    | "/home/service/billers/insurance"
    | "/home/service/billers/internet"
    | "/home/service/billers/loans"
    | "/home/service/billers/water-utilities";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  HomeAccountsRoute: typeof HomeAccountsRoute;
  HomeActivityRoute: typeof HomeActivityRoute;
  HomeDashboardRoute: typeof HomeDashboardRoute;
  HomeInboxRoute: typeof HomeInboxRoute;
  HomeUpdatesRoute: typeof HomeUpdatesRoute;
  WelcomeSigninRoute: typeof WelcomeSigninRoute;
  WelcomeSignupRoute: typeof WelcomeSignupRoute;
  WelcomeIndexRoute: typeof WelcomeIndexRoute;
  HomeProfileSettingsRoute: typeof HomeProfileSettingsRoute;
  HomeProfileWalletRoute: typeof HomeProfileWalletRoute;
  HomeServiceLoanRoute: typeof HomeServiceLoanRoute;
  HomeServicePayBillsRoute: typeof HomeServicePayBillsRoute;
  HomeServiceTransferRoute: typeof HomeServiceTransferRoute;
  HomeProfileIndexRoute: typeof HomeProfileIndexRoute;
  HomeServiceIndexRoute: typeof HomeServiceIndexRoute;
  HomeServiceBillersCreditCardRoute: typeof HomeServiceBillersCreditCardRoute;
  HomeServiceBillersElectricUtilitiesRoute: typeof HomeServiceBillersElectricUtilitiesRoute;
  HomeServiceBillersInsuranceRoute: typeof HomeServiceBillersInsuranceRoute;
  HomeServiceBillersInternetRoute: typeof HomeServiceBillersInternetRoute;
  HomeServiceBillersLoansRoute: typeof HomeServiceBillersLoansRoute;
  HomeServiceBillersWaterUtilitiesRoute: typeof HomeServiceBillersWaterUtilitiesRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeAccountsRoute: HomeAccountsRoute,
  HomeActivityRoute: HomeActivityRoute,
  HomeDashboardRoute: HomeDashboardRoute,
  HomeInboxRoute: HomeInboxRoute,
  HomeUpdatesRoute: HomeUpdatesRoute,
  WelcomeSigninRoute: WelcomeSigninRoute,
  WelcomeSignupRoute: WelcomeSignupRoute,
  WelcomeIndexRoute: WelcomeIndexRoute,
  HomeProfileSettingsRoute: HomeProfileSettingsRoute,
  HomeProfileWalletRoute: HomeProfileWalletRoute,
  HomeServiceLoanRoute: HomeServiceLoanRoute,
  HomeServicePayBillsRoute: HomeServicePayBillsRoute,
  HomeServiceTransferRoute: HomeServiceTransferRoute,
  HomeProfileIndexRoute: HomeProfileIndexRoute,
  HomeServiceIndexRoute: HomeServiceIndexRoute,
  HomeServiceBillersCreditCardRoute: HomeServiceBillersCreditCardRoute,
  HomeServiceBillersElectricUtilitiesRoute: HomeServiceBillersElectricUtilitiesRoute,
  HomeServiceBillersInsuranceRoute: HomeServiceBillersInsuranceRoute,
  HomeServiceBillersInternetRoute: HomeServiceBillersInternetRoute,
  HomeServiceBillersLoansRoute: HomeServiceBillersLoansRoute,
  HomeServiceBillersWaterUtilitiesRoute: HomeServiceBillersWaterUtilitiesRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home/accounts",
        "/home/activity",
        "/home/dashboard",
        "/home/inbox",
        "/home/updates",
        "/welcome/signin",
        "/welcome/signup",
        "/welcome/",
        "/home/profile/settings",
        "/home/profile/wallet",
        "/home/service/loan",
        "/home/service/pay-bills",
        "/home/service/transfer",
        "/home/profile/",
        "/home/service/",
        "/home/service/billers/credit-card",
        "/home/service/billers/electric-utilities",
        "/home/service/billers/insurance",
        "/home/service/billers/internet",
        "/home/service/billers/loans",
        "/home/service/billers/water-utilities"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home/accounts": {
      "filePath": "home/accounts.tsx"
    },
    "/home/activity": {
      "filePath": "home/activity.tsx"
    },
    "/home/dashboard": {
      "filePath": "home/dashboard.tsx"
    },
    "/home/inbox": {
      "filePath": "home/inbox.tsx"
    },
    "/home/updates": {
      "filePath": "home/updates.tsx"
    },
    "/welcome/signin": {
      "filePath": "welcome/signin.tsx"
    },
    "/welcome/signup": {
      "filePath": "welcome/signup.tsx"
    },
    "/welcome/": {
      "filePath": "welcome/index.tsx"
    },
    "/home/profile/settings": {
      "filePath": "home/profile/settings.tsx"
    },
    "/home/profile/wallet": {
      "filePath": "home/profile/wallet.tsx"
    },
    "/home/service/loan": {
      "filePath": "home/service/loan.tsx"
    },
    "/home/service/pay-bills": {
      "filePath": "home/service/pay-bills.tsx"
    },
    "/home/service/transfer": {
      "filePath": "home/service/transfer.tsx"
    },
    "/home/profile/": {
      "filePath": "home/profile/index.tsx"
    },
    "/home/service/": {
      "filePath": "home/service/index.tsx"
    },
    "/home/service/billers/credit-card": {
      "filePath": "home/service/billers/credit-card.tsx"
    },
    "/home/service/billers/electric-utilities": {
      "filePath": "home/service/billers/electric-utilities.tsx"
    },
    "/home/service/billers/insurance": {
      "filePath": "home/service/billers/insurance.tsx"
    },
    "/home/service/billers/internet": {
      "filePath": "home/service/billers/internet.tsx"
    },
    "/home/service/billers/loans": {
      "filePath": "home/service/billers/loans.tsx"
    },
    "/home/service/billers/water-utilities": {
      "filePath": "home/service/billers/water-utilities.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
