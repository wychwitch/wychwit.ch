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

const site = lume({
 server: {
    port: 8088,
  },
    src: "./_src",
});

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
    theme: {
      colors: {
          background: "#efe6f2",
          primary: "#8369ac",
          secondary: "#ccb0d4",
          accent: "#9d49b7",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    plugins: [typography],
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


export default site;
