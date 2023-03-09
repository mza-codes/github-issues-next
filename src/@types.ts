const obj = {
    url: "https://api.github.com/repos/pmndrs/zustand/issues/1678",
    repository_url: "https://api.github.com/repos/pmndrs/zustand",
    labels_url:
        "https://api.github.com/repos/pmndrs/zustand/issues/1678/labels{/name}",
    comments_url:
        "https://api.github.com/repos/pmndrs/zustand/issues/1678/comments",
    events_url:
        "https://api.github.com/repos/pmndrs/zustand/issues/1678/events",
    html_url: "https://github.com/pmndrs/zustand/pull/1678",
    id: 1610708325,
    node_id: "PR_kwDOCr-ZC85LVMgJ",
    number: 1678,
    title: "chore: add extentsion in imports",
    user: {
        login: "dai-shi",
        id: 490574,
        node_id: "MDQ6VXNlcjQ5MDU3NA==",
        avatar_url: "https://avatars.githubusercontent.com/u/490574?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/dai-shi",
        html_url: "https://github.com/dai-shi",
        followers_url: "https://api.github.com/users/dai-shi/followers",
        following_url:
            "https://api.github.com/users/dai-shi/following{/other_user}",
        gists_url: "https://api.github.com/users/dai-shi/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/dai-shi/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/dai-shi/subscriptions",
        organizations_url: "https://api.github.com/users/dai-shi/orgs",
        repos_url: "https://api.github.com/users/dai-shi/repos",
        events_url: "https://api.github.com/users/dai-shi/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/dai-shi/received_events",
        type: "User",
        site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 2,
    created_at: "2023-03-06T05:40:02Z",
    updated_at: "2023-03-06T06:10:49Z",
    closed_at: null,
    author_association: "MEMBER",
    active_lock_reason: null,
    draft: true,
    pull_request: {
        url: "https://api.github.com/repos/pmndrs/zustand/pulls/1678",
        html_url: "https://github.com/pmndrs/zustand/pull/1678",
        diff_url: "https://github.com/pmndrs/zustand/pull/1678.diff",
        patch_url: "https://github.com/pmndrs/zustand/pull/1678.patch",
        merged_at: null,
    },
    body: "following https://github.com/pmndrs/valtio/pull/644",
    reactions: {
        url: "https://api.github.com/repos/pmndrs/zustand/issues/1678/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
    },
    timeline_url:
        "https://api.github.com/repos/pmndrs/zustand/issues/1678/timeline",
    performed_via_github_app: null,
    state_reason: null,
};

type issue = typeof obj;

export interface RepoIssue extends issue {}
