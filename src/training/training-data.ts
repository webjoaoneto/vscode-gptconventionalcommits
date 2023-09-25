export const examples = [
  
  {
    "answer": "docs: fix broken image links in tutorial",
    "diff": "diff --git a/aio/content/tutorial/first-app/first-app-lesson-14.md b/aio/content/tutorial/first-app/first-app-lesson-14.md\nindex 053d6af63392f..f07e4e0c7a17b 100644\n--- a/aio/content/tutorial/first-app/first-app-lesson-14.md\n+++ b/aio/content/tutorial/first-app/first-app-lesson-14.md\n@@ -33,7 +33,7 @@ JSON Server is an open source tool used to create mock REST APIs. You'll use it\n                     \"name\": \"Acme Fresh Start Housing\",\n                     \"city\": \"Chicago\",\n                    "
  },
  {
    "answer": "docs(docs-infra): replace twitter logo by new one",
    "diff": "diff --git a/aio/src/app/app.module.ts b/aio/src/app/app.module.ts\nindex 75d22b5212c77..99bc48a6648b4 100644\n--- a/aio/src/app/app.module.ts\n+++ b/aio/src/app/app.module.ts\n@@ -117,13 +117,9 @@ export const svgIconProviders = [\n     useValue: \n       namespace: 'logos',\n       name: 'twitter',\n-      svgSource: svg`<svg focusable=\"false\" viewBox=\"0 0 50 59\" xmlns=\"http://www.w3.org/2000/svg\">\n-  <path d=\"M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3."
  },
  {
    "answer": "perf(platform-browser): disable styles of removed components instead of removing",
    "diff": "diff --git a/packages/core/test/bundling/animations-standalone/bundle.golden_symbols.json b/packages/core/test/bundling/animations-standalone/bundle.golden_symbols.json\nindex 80d12ea144359..067bfb8389710 100644\n--- a/packages/core/test/bundling/animations-standalone/bundle.golden_symbols.json\n+++ b/packages/core/test/bundling/animations-standalone/bundle.golden_symbols.json\n@@ -818,6 +818,9 @@\n   \n     \"name\": \"diPublicInInjector\"\n   ,\n+  \n+    \"name\": \"disableStylesheet\"\n+  ,\n   \n     \"nam"
  },
  {
    "answer": "refactor: add readonly to public InjectionToken types",
    "diff": "diff --git a/goldens/public-api/common/http/index.md b/goldens/public-api/common/http/index.md\nindex 9058c2ab8719a..d99404e22347d 100644\n--- a/goldens/public-api/common/http/index.md\n+++ b/goldens/public-api/common/http/index.md\n@@ -24,7 +24,7 @@ export class FetchBackend implements HttpBackend \n \n \n // @public\n-export const HTTP_INTERCEPTORS: InjectionToken<HttpInterceptor[]>;\n+export const HTTP_INTERCEPTORS: InjectionToken<readonly HttpInterceptor[]>;\n \n // @public\n export abstract class Htt"
  },
  {
    "answer": "perf(core): generate arrow functions for pure function calls",
    "diff": "diff --git a/packages/compiler-cli/test/compliance/test_cases/r3_compiler_compliance/components_and_directives/array_literals_null_vs_empty.js b/packages/compiler-cli/test/compliance/test_cases/r3_compiler_compliance/components_and_directives/array_literals_null_vs_empty.js\nindex 70f246f82127a..8ed09158733cd 100644\n--- a/packages/compiler-cli/test/compliance/test_cases/r3_compiler_compliance/components_and_directives/array_literals_null_vs_empty.js\n+++ b/packages/compiler-cli/test/compliance/tes"
  },
  {
    "answer": "feat(zone.js): remove legacy files and access to deep imports",
    "diff": "diff --git a/packages/zone.js/bundles.bzl b/packages/zone.js/bundles.bzl\nindex 90ecfac59a29f..79d0e861568e0 100644\n--- a/packages/zone.js/bundles.bzl\n+++ b/packages/zone.js/bundles.bzl\n@@ -103,11 +103,4 @@ BUNDLES_ENTRY_POINTS = \n     \"zone-testing\": \n         \"entrypoint\": _DIR + \"testing/zone-testing\",\n     ,\n-    \"zone-testing-bundle\": \n-        \"es5\": _DIR + \"browser/rollup-test-main\",\n-        \"es2015\": _DIR + \"browser/rollup-test-main\",\n-    ,\n-    \"zone-testing-node-bundle\": \n-     "
  },
  {
    "answer": "build: update `@angular/build-tooling` to `17a3a88dc637f365a0bc3168de839c18c7f6db81`",
    "diff": "diff --git a/package.json b/package.json\nindex 611c31782fee6..4f8736aa4b8e0 100644\n--- a/package.json\n+++ b/package.json\n@@ -158,7 +158,7 @@\n   \"// 2\": \"devDependencies are not used under Bazel. Many can be removed after test.sh is deleted.\",\n   \"devDependencies\": \n     \"@actions/core\": \"^1.10.0\",\n-    \"@angular/build-tooling\": \"https://github.com/angular/dev-infra-private-build-tooling-builds.git#4463309193594fc8b23090c89c7f34178320681c\",\n+    \"@angular/build-tooling\": \"https://github.com/angu"
  },
  {
    "answer": "ci: fix permissions issue in zonejs ci test",
    "diff": "diff --git a/.github/workflows/ci.yml b/.github/workflows/ci.yml\nindex 0a85ba61a559c..cd3052d0ef9c0 100644\n--- a/.github/workflows/ci.yml\n+++ b/.github/workflows/ci.yml\n@@ -195,8 +195,8 @@ jobs:\n           cache-node-modules: true\n           node-module-directories: |\n             ./node_modules\n-            ./packages/zone.js\n-            ./packages/zone.js/test/typings\n+            ./packages/zone.js/node_modules\n+            ./packages/zone.js/test/typings/node_modules\n       - name: Setup Ba"
  },
  {
    "answer": "chore(devtools): add renovate.json",
    "diff": "diff --git a/renovate.json b/renovate.json\nnew file mode 100644\nindex 0000000000000..f45d8f110c303\n--- /dev/null\n+++ b/renovate.json\n@@ -0,0 +1,5 @@\n+\n+  \"extends\": [\n+    \"config:base\"\n+  ]\n+\n"
  },
  {
    "answer": "Revert \"feat(common): make the warning for lazy-loaded lcp image an error",
    "diff": "diff --git a/aio/content/guide/image-directive.md b/aio/content/guide/image-directive.md\nindex ff039792765a6..5aa9118162bd9 100644\n--- a/aio/content/guide/image-directive.md\n+++ b/aio/content/guide/image-directive.md\n@@ -65,7 +65,7 @@ Marking an image as `priority` applies the following optimizations:\n *   Sets `loading=eager` (read more about native lazy loading [here](https://web.dev/browser-level-image-lazy-loading))\n *   Automatically generates a [preload link element](https://developer.mozi"
  },
  {
    "answer": "WIP",
    "diff": "diff --git a/modules/core/src/compiler/compiler.es6d b/modules/core/src/compiler/compiler.es6d\nnew file mode 100644\nindex 0000000000000..3ebc08fbe1ee3\n--- /dev/null\n+++ b/modules/core/src/compiler/compiler.es6d\n@@ -0,0 +1,16 @@\n+import Future from '../facade';\n+import ProtoView from './proto_view';\n+\n+export class Compiler \n+  /**\n+   * # Why future?\n+   *   - compilation will load templates. Instantiating views before templates are loaded will \n+   *     complicate the Directive code. BENE"
  },
  {
    "answer": "refactor: add readonly to public InjectionToken types",
    "diff": "diff --git a/goldens/public-api/common/http/index.md b/goldens/public-api/common/http/index.md\nindex 9058c2ab8719a..d99404e22347d 100644\n--- a/goldens/public-api/common/http/index.md\n+++ b/goldens/public-api/common/http/index.md\n@@ -24,7 +24,7 @@ export class FetchBackend implements HttpBackend \n \n \n // @public\n-export const HTTP_INTERCEPTORS: InjectionToken<HttpInterceptor[]>;\n+export const HTTP_INTERCEPTORS: InjectionToken<readonly HttpInterceptor[]>;\n \n // @public\n export abstract class Htt"
  },
  {
    "answer": "release: cut the v17.0.0-next.5 release",
    "diff": "diff --git a/CHANGELOG.md b/CHANGELOG.md\nindex def074a0b7475..81aadf9b1e65c 100644\n--- a/CHANGELOG.md\n+++ b/CHANGELOG.md\n@@ -1,3 +1,73 @@\n+<a name=\"17.0.0-next.5\"></a>\n+# 17.0.0-next.5 (2023-09-20)\n+## Breaking Changes\n+### \n+- Node.js v16 support has been removed and the minimum support version has been bumped to 18.13.0.\n+  \n+  Node.js v16 is planned to be End-of-Life on 2023-09-11. Angular will stop supporting Node.js v16 in Angular v17. For Node.js release schedule details, please see: https"
  },
  {
    "answer": "feat(core): implement deferred block interaction triggers",
    "diff": "diff --git a/packages/core/src/render3/instructions/defer.ts b/packages/core/src/render3/instructions/defer.ts\nindex e79a776d426ae..56269a742955c 100644\n--- a/packages/core/src/render3/instructions/defer.ts\n+++ b/packages/core/src/render3/instructions/defer.ts\n@@ -9,8 +9,9 @@\n import InjectionToken, Injector, \u0275\u0275defineInjectable from '../../di';\n import findMatchingDehydratedView from '../../hydration/views';\n import populateDehydratedViewsInContainer from '../../linker/view_container_ref';"
  },
  {
  "answer": "chore(types): add comma to enum ForceWithLease",
  "diff": `diff --git a/src/types/git-types.ts b/src/types/git-types.ts
  index 61736b9..5876a6b 100644
  --- a/src/types/git-types.ts
  +++ b/src/types/git-types.ts
  @@ -16,7 +16,7 @@ export interface MyInterface
   
   export const enum MyEnum
  -       WithoutComma
  +       WithoutComma,
   `
  }
];
