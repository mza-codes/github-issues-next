import { Octokit } from "octokit";

export const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN ?? "",
    baseUrl: "https://api.github.com",
});

/**
 *  (async () => {
    try {
        const data = await octokit.rest.apps.getAuthenticated();
        console.log("GETAUTHENTICATED RES: ", data);
    } catch (err) {
        console.log("ERROR GETTING AUTHENTICATED:", err);
    } finally {
        return;
    }
})(); 
*/
