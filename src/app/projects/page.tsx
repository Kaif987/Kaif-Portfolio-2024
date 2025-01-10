import { RepoCard } from "@/components/ui/repo-card";

type Repo = {
  name: string;
  fullName: string;
  description: string | null;
  language: string;
  updatedAt: Date;
};

async function getAllRepos() {
  const response = await fetch("https://api.github.com/users/kaif987/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const repos = await response.json();

  const allRepos: Repo[] = repos.map((repo: any) => {
    return {
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      language: repo.language,
      updatedAt: new Date(repo.pushed_at),
    };
  });

  return allRepos;
}

export default async function Projects() {
  const repos = await getAllRepos();

  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex w-fit items-end">
        <h3 className="text-2xl font-semibold">Open Source Projects</h3>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {repos.map((repo) => (
          <RepoCard key={repo.fullName} {...repo} />
        ))}
      </div>
    </div>
  );
}
