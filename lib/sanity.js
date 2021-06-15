import {
	createClient,
	createImageUrlBuilder,
	createPortableTextComponent,
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from "next-sanity";
//! import {config} from './config'

const config = {
	projectId: "9cakgzs8",
	dataset: "production",
	apiVersion: "2021-06-13",
	useCdn: false,
};
export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
	...config,
	serializers: {},
});
