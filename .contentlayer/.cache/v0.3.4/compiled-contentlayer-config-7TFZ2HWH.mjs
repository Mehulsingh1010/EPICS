// contentlayer.config.js
import { defineDocumentType } from "@contentlayer/source-files";
import { makeSource } from "@contentlayer/source-remote-files";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var execAsync = promisify(exec);
var syncContentFromGit = async (contentDir) => {
  const syncRun = async () => {
    const gitUrl = "git@github.com:Mehulsingh1010/hastakriti-docs.git";
    try {
      await fs.mkdir(contentDir, { recursive: true });
    } catch (error) {
      console.log("Directory already exists or cannot be created:", error);
    }
    const sync = async () => {
      try {
        const isGitRepo = await fs.access(path.join(contentDir, ".git")).then(() => true).catch(() => false);
        if (isGitRepo) {
          console.log("Pulling latest changes...");
          await execAsync("git pull", {
            cwd: contentDir,
            shell: true
          });
        } else {
          console.log("Cloning repository...");
          await execAsync(`git clone ${gitUrl} .`, {
            cwd: contentDir,
            shell: true
          });
        }
      } catch (error) {
        console.error("Git operation failed:", error);
      }
    };
    await sync();
  };
  let wasCancelled = false;
  let syncInterval;
  const syncLoop = async () => {
    await syncRun();
    if (wasCancelled)
      return;
    syncInterval = setTimeout(syncLoop, 1e3 * 40);
  };
  await syncLoop();
  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};
var computedFields = {
  path: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    published: {
      type: "boolean"
    },
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date"
    },
    url: {
      type: "string"
    },
    repository: {
      type: "string"
    }
  },
  computedFields
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    }
  },
  computedFields
}));
console.log("Plugins loaded:", {
  remarkGfm: !!remarkGfm,
  rehypePrettyCode: !!rehypePrettyCode,
  rehypeSlug: !!rehypeSlug,
  rehypeAutolinkHeadings: !!rehypeAutolinkHeadings
});
var contentlayer_config_default = makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "content-repo",
  documentTypes: [Page, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Page,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7TFZ2HWH.mjs.map
