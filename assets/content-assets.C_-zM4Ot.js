const __ASTRO_IMAGE_IMPORT_qaXAp = new Proxy({"src":"/assets/astro.DdiTJYZt.jpeg","width":1200,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nerdiken/WebstormProjects/me/src/assets/astro.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/nerdiken/WebstormProjects/me/src/assets/astro.jpeg");
							return target[name];
						}
					});

const contentAssets = new Map([["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-1.md", __ASTRO_IMAGE_IMPORT_qaXAp], ["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-2.md", __ASTRO_IMAGE_IMPORT_qaXAp], ["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-3.md", __ASTRO_IMAGE_IMPORT_qaXAp], ["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-4.md", __ASTRO_IMAGE_IMPORT_qaXAp], ["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-5.md", __ASTRO_IMAGE_IMPORT_qaXAp], ["../../assets/astro.jpeg?astroContentImageFlag=&importer=src%2Fdata%2Fblog%2Fblogpost-6.md", __ASTRO_IMAGE_IMPORT_qaXAp]]);

export { contentAssets as default };
