import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import picture from "lume/plugins/picture.ts";
import prism from "lume/plugins/prism.ts";
import purgecss from "lume/plugins/purgecss.ts";
import redirects from "lume/plugins/redirects.ts";
import relations from "lume/plugins/relations.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import sheets from "lume/plugins/sheets.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import terser from "lume/plugins/terser.ts";
import postcss from "lume/plugins/postcss.ts";
import transform_images from "lume/plugins/transform_images.ts";
import toml from "lume/plugins/toml.ts";
import typography from "npm:@tailwindcss/typography";
import remark from "lume/plugins/remark.ts";
import bitflipped_shortcodes from "./_src/_scripts/bitflipped_shortcodes.js";


const markdown = {
  options: {
    breaks: true,
  },
};
const site = lume({
 server: {
    port: 8088,
  },
    src: "./_src",
}, { markdown });

site.use(attributes());
site.use(date());
site.use(favicon());
site.use(feed());
site.use(jsx());
site.use(mdx());
site.use(metas());
site.use(nav());
site.use(pagefind());
site.use(picture());
site.use(prism());
site.use(tailwindcss({
      // Extract the classes from HTML and JSX files
  extensions: [".html", ".jsx"],

  // Your Tailwind options, like the theme colors and fonts
  options: {
    plugins: [typography],
    theme: {
      colors: {
          background: "#efe6f2",
        white: "#FFFFFF",
        black: "#000000",
          primary: "#5a3970",
          secondary: "#caaccc",
          accent: "#cc7a9c",
        dark: "2E282A",
        bf_da: "#88d6a4",
        bf_fa: "#078446",
        bf_bg: "#efefef",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
}));
site.use(postcss(/* Options */));
site.use(purgecss());
site.use(redirects());
site.use(relations());
site.use(relative_urls());
site.use(robots());
site.use(sass());
site.use(sheets());
site.use(sitemap());
site.use(slugify_urls());
site.use(terser());
site.use(transform_images());
site.use(toml());

site.preprocess(['.md'], (pages) => {
    for(const page of pages) {
        if (typeof page.data.content !== "string") {
            continue;
        }
        if (page.src.path.startsWith('/fic/bitflipped')) {
           page.data.content = bitflipped_shortcodes(page.data.content);
        }
    }
});


export default site;
