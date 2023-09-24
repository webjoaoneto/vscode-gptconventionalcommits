export const conventionalExamples = [
  { diff: `
  diff --git a/content/about/index.md b/content/about/index.md
  index 262ef67e..7b84cbe7 100644
  --- a/content/about/index.md
  +++ b/content/about/index.md
  @@ -33,7 +33,7 @@ The first draft of this specification has been written in collaboration with som
   * [gitlint](https://github.com/jorisroovers/gitlint): Git commit message linter written in Python, which can be configured to [enforce Conventional Commits format](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits).
   * [conform](https://github.com/autonomy/conform): a tool that can be used to enforce policies on git repositories, including Conventional Commits.
   * [detect-next-version](https://npmjs.com/package/detect-next-version): Parse, detect and get more metadata about given Conventional Commits.
  -* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calculcates the recommended version bump based on given Conventional Commits.
  +* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calculates the recommended version bump based on given Conventional Commits.
   * [git-commits-since](https://www.npmjs.com/package/git-commits-since): Get all (raw) commits since period or (by default) from latest git SemVer tag, plus plugins support.
   * [standard-version](https://github.com/conventional-changelog/standard-version): Automatic versioning and CHANGELOG management, using GitHub's new squash button and the recommended Conventional Commits workflow.
   * [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): provides extensible context and template-based completion, and inspections, for Conventional Commits inside the VCS Commit dialog. Available for all [JetBrains IDEs](https://www.jetbrains.com/).
  `, output: "fix(lang): fix typo index page translated into english" },
  { diff:`
  diff --git a/packages/platform-express/adapters/express-adapter.ts b/packages/platform-express/adapters/express-adapter.ts
index f330a852782..83358b69729 100644
--- a/packages/platform-express/adapters/express-adapter.ts
+++ b/packages/platform-express/adapters/express-adapter.ts
@@ -101,9 +101,10 @@ export class ExpressAdapter extends AbstractHttpAdapter<
         
       );
     
+    const responseContentType = response.getHeader('Content-Type');
     if (
-      response.getHeader('Content-Type') !== undefined &&
-      !response.getHeader('Content-Type').startsWith('application/json') &&
+      typeof responseContentType === 'string' &&
+      !responseContentType.startsWith('application/json') &&
       body?.statusCode >= HttpStatus.BAD_REQUEST
     ) 
       this.logger.warn(
  `, output:`fix(express): when content-type header is null` },
];