import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderComponent, r as renderTemplate } from './astro/server.Dc1qTlqP.js';
import 'kleur/colors';
import { g as getCollection } from './_astro_content.C8zu0fse.js';
import { c as $$Card, a as $$Button, b as $$BlogList } from './Default.src-vOV1.js';

const $$Astro = createAstro("https://www.nerdiken.me/");
const $$RecentBlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentBlogPosts;
  const { count } = Astro2.props;
  const posts = await getCollection("blog").then(
    (posts2) => posts2.reverse().slice(0, count ?? 3)
  );
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> ${renderComponent($$result, "Card", $$Card, {}, { "default": async ($$result2) => renderTemplate` <div class="flex justify-between items-start"> <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
Recent Blogposts
</h2> <div class="hidden md:block"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": async ($$result3) => renderTemplate`Go to blog &rarr;` })} </div> <div class="block md:hidden"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": async ($$result3) => renderTemplate`to blog` })} </div> </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} ` })} </section>`;
}, "/Users/nerdiken/WebstormProjects/me/src/components/generic/RecentBlogPosts.astro", void 0);

export { $$RecentBlogPosts as $ };
