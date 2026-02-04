---
outline: deep
---

# 项目目录结构

```ansi
📂 lithe-admin
├── 📄 [95mREADME.en_US.md[0m
├── 📄 [95mREADME.md[0m
├── 📄 [34meslint.config.ts[0m
├── 📄 [91mindex.html[0m
├── 📄 [33mpackage.json[0m
├── 📄 [33mpnpm-lock.yaml[0m
└── 📂 public/
│  └── 📂 assets/
│    ├── 📄 [94mpreloader.css[0m
│  ├── 📄 [96mfavicon.ico[0m
└── 📂 src/
│  ├── 📄 [92mApp.vue[0m
│  └── 📂 assets/
│    ├── 📄 [94mbase.css[0m
│    ├── 📄 [94mmain.css[0m
│    ├── 📄 [96mnoise.png[0m
│    ├── 📄 [96mtexture.png[0m
│    ├── 📄 [96mtopography.svg[0m
│  └── 📂 components/
│    ├── 📄 [92mAppLogo.vue[0m
│    ├── 📄 [92mNoise.vue[0m
│    ├── 📄 [92mUserAvatar.vue[0m
│    ├── 📄 [92mUserDropdown.vue[0m
│    └── 📂 button-animation/
│      ├── 📄 [95mButtonAnimation.test.ts[0m
│      ├── 📄 [92mButtonAnimation.vue[0m
│      ├── 📄 [92mButtonAnimationProvider.vue[0m
│      ├── 📄 [34mindex.ts[0m
│      ├── 📄 [34minjection.ts[0m
│      ├── 📄 [34minterface.ts[0m
│    └── 📂 collapse-transition/
│      ├── 📄 [95mCollapseTransition.test.ts[0m
│      ├── 📄 [92mCollapseTransition.vue[0m
│      ├── 📄 [92mCollapseTransitionTrigger.vue[0m
│      ├── 📄 [34mindex.ts[0m
│      ├── 📄 [34minterface.ts[0m
│    └── 📂 empty-placeholder/
│      ├── 📄 [95mEmptyPlaceholder.test.ts[0m
│      ├── 📄 [92mEmptyPlaceholder.vue[0m
│      ├── 📄 [34mindex.ts[0m
│    └── 📂 hint-help/
│      ├── 📄 [95mHintHelp.test.ts[0m
│      ├── 📄 [92mHintHelp.vue[0m
│      ├── 📄 [34mindex.ts[0m
│    ├── 📄 [34mindex.ts[0m
│    └── 📂 scroll-container/
│      ├── 📄 [95mScrollContainer.test.ts[0m
│      ├── 📄 [92mScrollContainer.vue[0m
│      ├── 📄 [34mindex.ts[0m
│  └── 📂 composables/
│    ├── 📄 [34mindex.ts[0m
│    ├── 📄 [34museComponentModifier.ts[0m
│    ├── 📄 [34museComponentThemeOverrides.ts[0m
│    ├── 📄 [34museDiscreteApi.ts[0m
│    ├── 📄 [34museInjection.ts[0m
│    ├── 📄 [34museResettable.ts[0m
│    ├── 📄 [34museTheme.ts[0m
│  └── 📂 injection/
│    ├── 📄 [34mindex.ts[0m
│    ├── 📄 [34minterface.ts[0m
│  └── 📂 layout/
│    └── 📂 aside/
│      ├── 📄 [92mSidebarMenu.vue[0m
│      ├── 📄 [92mSidebarUserPanel.vue[0m
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 footer/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 header/
│      └── 📂 action/
│        ├── 📄 [92mAvatarDropdown.vue[0m
│        ├── 📄 [92mFullScreen.vue[0m
│        ├── 📄 [92mPreferencesDrawer.vue[0m
│        ├── 📄 [92mSignOut.vue[0m
│        ├── 📄 [92mThemeModePopover.vue[0m
│        └── 📂 component/
│          ├── 📄 [92mLayoutThumbnail.vue[0m
│          ├── 📄 [92mWatermarkModal.vue[0m
│        ├── 📄 [92mindex.vue[0m
│      ├── 📄 [92mindex.vue[0m
│      └── 📂 logo/
│        ├── 📄 [92mindex.vue[0m
│      └── 📂 navigation/
│        ├── 📄 [92mBreadcrumb.vue[0m
│        ├── 📄 [92mHorizontalMenu.vue[0m
│        ├── 📄 [92mNavigationButton.vue[0m
│        ├── 📄 [92mindex.vue[0m
│    ├── 📄 [92mindex.vue[0m
│    └── 📂 main/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 mobile/
│      ├── 📄 [92mMobileHeader.vue[0m
│      ├── 📄 [92mMobileLeftAside.vue[0m
│      ├── 📄 [92mMobileRightAside.vue[0m
│    └── 📂 tabs/
│      ├── 📄 [92mindex.vue[0m
│  ├── 📄 [34mmain.ts[0m
│  └── 📂 router/
│    ├── 📄 [34mguard.ts[0m
│    ├── 📄 [34mhelper.ts[0m
│    ├── 📄 [34mindex.ts[0m
│    ├── 📄 [34mrecord.ts[0m
│  └── 📂 stores/
│    ├── 📄 [34mindex.ts[0m
│    ├── 📄 [34mpreferences.ts[0m
│    ├── 📄 [34msystem.ts[0m
│    ├── 📄 [34mtabs.ts[0m
│    ├── 📄 [34muser.ts[0m
│  └── 📂 theme/
│    ├── 📄 [34mcommon.ts[0m
│    ├── 📄 [34mdark.ts[0m
│    ├── 📄 [34mlight.ts[0m
│  └── 📂 types/
│    ├── 📄 [95menv.d.ts[0m
│    ├── 📄 [95mvue-router.d.ts[0m
│    ├── 📄 [95mwindow.d.ts[0m
│  └── 📂 utils/
│    ├── 📄 [34mchromaHelper.ts[0m
│    ├── 📄 [95mtailwindColor.test.ts[0m
│    ├── 📄 [34mtailwindColor.ts[0m
│  └── 📂 views/
│    └── 📂 about/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 dashboard/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 data-show/
│      └── 📂 data-form/
│        ├── 📄 [92mindex.vue[0m
│      └── 📂 data-table/
│        ├── 📄 [92mActionModal.vue[0m
│        ├── 📄 [92mindex.vue[0m
│    └── 📂 drag-drop/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 dynamic-route/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 error-page/
│      ├── 📄 [92m404.vue[0m
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 feedback/
│      ├── 📄 [34mdiscreteApi.ts[0m
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 multi-level-menu/
│      ├── 📄 [92mindex.vue[0m
│    └── 📂 sign-in/
│      └── 📂 component/
│        ├── 📄 [92mIllustration1.vue[0m
│        ├── 📄 [92mIllustration2.vue[0m
│        ├── 📄 [92mIllustration3.vue[0m
│        ├── 📄 [92mThemeColorPopover.vue[0m
│      ├── 📄 [92mindex.vue[0m
├── 📄 [34mtailwind.config.ts[0m
├── 📄 [33mtsconfig.app.json[0m
├── 📄 [33mtsconfig.json[0m
├── 📄 [33mtsconfig.node.json[0m
├── 📄 [33mtsconfig.vitest.json[0m
├── 📄 [34mvite.config.ts[0m
└── 📄 [34mvitest.config.ts[0m
```
