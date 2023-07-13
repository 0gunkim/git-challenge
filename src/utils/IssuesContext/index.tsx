import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const IssuseContext = createContext<any>(null);

export const useIssuse = () => useContext(IssuseContext);
interface IssuseProviderProps {
  children: ReactNode;
  issuesService: any;
}
interface IssueType {
  active_lock_reason: null;
  assignee: null;
  assignees: [];
  author_association: 'CONTRIBUTOR';
  body: 'Bumps [semver](https://github.com/npm/node-semver) from 5.7.1 to 5.7.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a href="https://github.com/npm/node-semver/releases">semver\'s releases</a>.</em></p>\n<blockquote>\n<h2>v5.7.2</h2>\n<h2><a href="https://github.com/npm/node-semver/compare/v5.7.1...v5.7.2">5.7.2</a> (2023-07-10)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li><a href="https://github.com/npm/node-semver/commit/2f8fd41487acf380194579ecb6f8b1bbfe116be0"><code>2f8fd41</code></a> <a href="https://redirect.github.com/npm/node-semver/pull/585">#585</a> better handling of whitespace (<a href="https://redirect.github.com/npm/node-semver/issues/585">#585</a>) (<a href="https://github.com/joaomoreno"><code>@​joaomoreno</code></a>, <a href="https://github.com/lukekarrys"><code>@​lukekarrys</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href="https://github.com/npm/node-semver/blob/v5.7.2/CHANGELOG.md">semver\'s changelog</a>.</em></p>\n<blockquote>\n<h2><a href="https://github.com/npm/node-semver/compare/v5.7.1...v5.7.2">5.7.2</a> (2023-07-10)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li><a href="https://github.com/npm/node-semver/commit/2f8fd41487acf380194579ecb6f8b1bbfe116be0"><code>2f8fd41</code></a> <a href="https://redirect.github.com/npm/node-semver/pull/585">#585</a> better handling of whitespace (<a href="https://redirect.github.com/npm/node-semver/issues/585">#585</a>) (<a href="https://github.com/joaomoreno"><code>@​joaomoreno</code></a>, <a href="https://github.com/lukekarrys"><code>@​lukekarrys</code></a>)</li>\n</ul>\n<h2>5.7</h2>\n<ul>\n<li>Add <code>minVersion</code> method</li>\n</ul>\n<h2>5.6</h2>\n<ul>\n<li>Move boolean <code>loose</code> param to an options object, with\nbackwards-compatibility protection.</li>\n<li>Add ability to opt out of special prerelease version handling with\nthe <code>includePrerelease</code> option flag.</li>\n</ul>\n<h2>5.5</h2>\n<ul>\n<li>Add version coercion capabilities</li>\n</ul>\n<h2>5.4</h2>\n<ul>\n<li>Add intersection checking</li>\n</ul>\n<h2>5.3</h2>\n<ul>\n<li>Add <code>minSatisfying</code> method</li>\n</ul>\n<h2>5.2</h2>\n<ul>\n<li>Add <code>prerelease(v)</code> that returns prerelease components</li>\n</ul>\n<h2>5.1</h2>\n<ul>\n<li>Add Backus-Naur for ranges</li>\n<li>Remove excessively cute inspection methods</li>\n</ul>\n<h2>5.0</h2>\n<ul>\n<li>Remove AMD/Browserified build artifacts</li>\n<li>Fix ltr and gtr when using the <code>*</code> range</li>\n<li>Fix for range <code>*</code> with a prerelease identifier</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href="https://github.com/npm/node-semver/commit/f8cc313550691a50d9662d8c94f0c033717efd7d"><code>f8cc313</code></a> chore: release 5.7.2</li>\n<li><a href="https://github.com/npm/node-semver/commit/2f8fd41487acf380194579ecb6f8b1bbfe116be0"><code>2f8fd41</code></a> fix: better handling of whitespace (<a href="https://redirect.github.com/npm/node-semver/issues/585">#585</a>)</li>\n<li><a href="https://github.com/npm/node-semver/commit/deb5ad51bf58868fa243c1683775305fe9e0e365"><code>deb5ad5</code></a> chore: <code>@​npmcli/template-oss</code><a href="https://github.com/4"><code>@​4</code></a>.16.0</li>\n<li>See full diff in <a href="https://github.com/npm/node-semver/compare/v5.7.1...v5.7.2">compare view</a></li>\n</ul>\n</details>\n<details>\n<summary>Maintainer changes</summary>\n<p>This version was pushed to npm by <a href="https://www.npmjs.com/~lukekarrys">lukekarrys</a>, a new releaser for semver since your current version.</p>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=semver&package-manager=npm_and_yarn&previous-version=5.7.1&new-version=5.7.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don\'t alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/facebook/react/network/alerts).\n\n</details>';
  closed_at: null;
  comments: 1;
  comments_url: 'https://api.github.com/repos/facebook/react/issues/27104/comments';
  created_at: '2023-07-12T18:20:19Z';
  draft: false;
  events_url: 'https://api.github.com/repos/facebook/react/issues/27104/events';
  html_url: 'https://github.com/facebook/react/pull/27104';
  id: 1801530892;
  labels: Object;
  labels_url: 'https://api.github.com/repos/facebook/react/issues/27104/labels{/name}';
  locked: false;
  milestone: null;
  node_id: 'PR_kwDOAJy2Ks5VV0Vv';
  number: 27104;
  performed_via_github_app: null;
  pull_request: Object;
  reactions: Object;
  repository_url: 'https://api.github.com/repos/facebook/react';
  state: 'open';
  state_reason: null;
  timeline_url: 'https://api.github.com/repos/facebook/react/issues/27104/timeline';
  title: 'Bump semver from 5.7.1 to 5.7.2 in /fixtures/ssr';
  updated_at: '2023-07-12T18:24:47Z';
  url: string;
  user: Object;
}
type IssuesType = IssueType[];

export function IssuseProvider({
  children,
  issuesService,
}: IssuseProviderProps) {
  const [issues, setIssuse] = useState<IssuesType>([]);
  const [detail, setDetail] = useState<IssuesType>([]);
  const [issuesNumber, setIssuesNumber] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [pageNum, setPageNum] = useState(0);

  const pageCount = () => {
    setPageNum(pre => pre + 1);
  };
  const moveDetail = useCallback(
    (issuesNum: string) => {
      setIssuesNumber(issuesNum);
      // console.log(stringChangNum);
    },
    [issuesNumber],
  );
  useEffect(() => {
    setIsLoading('pendding');
    issuesService.get(pageNum).then((pre: IssuesType) => {
      setIssuse((preIssues: IssuesType) => [...preIssues, ...pre]);
      setIsLoading('fullfilled');
    });
  }, [pageNum]);
  useEffect(() => {
    setIsLoading('pendding');
    if (issuesNumber !== '') {
      issuesService.detailGet(issuesNumber).then((result: IssuesType) => {
        setDetail(result);
        setIsLoading('fullfilled');
      });
    }
  }, [issuesNumber]);

  return (
    <IssuseContext.Provider
      value={{ issues, pageCount, isLoading, detail, moveDetail }}
    >
      {children}
    </IssuseContext.Provider>
  );
}
