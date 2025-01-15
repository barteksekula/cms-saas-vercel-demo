import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) { content: _Content( where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}} locale: $locale ) { total items { ...IContentData ...PageData ...BlankExperienceData ...BlogSectionExperienceData ...BlogPostPageData ...LandingPageData ...StandardPageData ...StartPageData } } } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogSectionExperienceData on BlogSectionExperience { ...ExperienceData } fragment BlogPostPageData on BlogPostPage { blogTitle: Heading blogSubtitle: ArticleSubHeading blogImage: BlogPostPromoImage { ...ReferenceData } blogBody: BlogPostBody { json } blogAuthor: ArticleAuthor blogTopics: Topic } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } MainContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment StandardPageData on StandardPage { sptitle: StandardPageHeading spsubtitle: StandardSubHeading spimage: StandardPromoImage { ...ReferenceData } spdescription: MainBody { json } } fragment StartPageData on StartPage { HomePageHeroContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } HomePageMainContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment PageData on _IContent { ...IContentData } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionComponentNode { component { ...BlockData ...ElementData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } } fragment ArticleListElementData on ArticleListElement { articleListCount topics } fragment BlogListingBlockData on BlogListingBlock { _metadata { name: displayName } showFilters: BlogListingShowFilters selectedPageSize: BlogListingItemCount } fragment ButtonBlockData on ButtonBlock { children: ButtonText url: ButtonUrl { ...LinkData } className: ButtonClass buttonType: ButtonType buttonVariant: ButtonVariant } fragment CTAElementData on CTAElement { cta_text: Text cta_link: Link { ...LinkData } } fragment CardBlockData on CardBlock { cardButton: CardButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } cardColor: CardColor cardDescription: CardDescription { json html } cardHeading: CardHeading cardIcon: CardIcon { ...ReferenceData } cardImage: CardImage { ...ReferenceData } cardSubheading: CardSubHeading cardImageLayout: ImageLayout } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem ...BlockData ...ImageMediaComponentData ...VideoMediaComponentData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment ContentRecsElementData on ContentRecsElement { ElementDeliveryApiKey ElementRecommendationCount } fragment HeadingElementData on HeadingElement { headingText } fragment HeroBlockData on HeroBlock { heroImage: HeroImage { ...ReferenceData } eyebrow: Eyebrow heroHeading: Heading heroSubheading: SubHeading heroDescription: Description { json html } heroColor: HeroColor heroButton: HeroButton { ...ButtonBlockPropertyData } } fragment HomePageHeroBlockData on HomePageHeroBlock { homeHeroHeading: HomeHeroBlockHeading homeHeroSubheading: HomeHeroBlockSubHeading leftImage: HomeHeroLeftImage { ...ReferenceData } rightImage: HomeHeroRightImage { ...ReferenceData } homeHeroButton: HomeHeroButtonBlock { ...ButtonBlockPropertyData } } fragment HtmlBlockData on HtmlBlock { HtmlBlockHeading HtmlContent { json html } } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment LayoutContainerBlockData on LayoutContainerBlock { columns: ColumnsCount gap: GapSize LayoutContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } containerColor: ContainerBackgroundColor backgroundImage: ContainerBackgroundImage { ...ReferenceData } marginTop: ContainerMarginTop marginBottom: ContainerMarginBottom paddingBottom: ContainerPaddingBottom paddingTop: ContainerPaddingTop } fragment LayoutSettingsBlockData on LayoutSettingsBlock { mainMenu { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } contactInfoHeading serviceButtons { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } contactInfo { json html } footerMenus { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } copyright legalLinks { ...LinkItemData } appIdentifiers } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { _metadata { displayName } MenuMenuHeading MegaMenuUrl { ...LinkData } MegaMenuContentArea { ...IContentData ...MenuNavigationBlockData ...CardBlockData } } fragment MenuNavigationBlockData on MenuNavigationBlock { _metadata { displayName } MenuNavigationHeading NavigationLinks { ...LinkItemData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment PageSeoSettingsData on PageSeoSettings { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ParagraphElementData on ParagraphElement { text { json } } fragment QuoteBlockData on QuoteBlock { quote: QuoteText color: QuoteColor active: QuoteActive name: QuoteProfileName profilePicture: QuoteProfilePicture { ...ReferenceData } location: QuoteProfileLocation } fragment RichTextElementData on RichTextElement { text { json html } } fragment TestimonialElementData on TestimonialElement { customerName customerLocation customerImage { ...ReferenceData } referenceTitle referenceText { json } } fragment TextBlockData on TextBlock { overline: TextBlockOverline headingSize: TextBlockHeadingSize heading: TextBlockHeading description: TextBlockDescription { json html } center: TextCenter width: TextBlockWidth className: TextClassName } fragment VideoElementData on VideoElement { title video { ...ReferenceData } placeholder { ...ReferenceData } } fragment BlankSectionData on BlankSection { _metadata { key } } fragment ElementData on _IComponent { ...IElementData } fragment BlockData on _IComponent { ...IContentData } fragment ImageMediaComponentData on ImageMedia { alt: AltText meta: _metadata { url { default } name: displayName } } fragment VideoMediaComponentData on VideoMedia { meta: _metadata { url { default } name: displayName } } fragment IContentListItem on _IContent { ...IContentData } fragment ButtonBlockPropertyData on ButtonBlockProperty { children: ButtonText url: ButtonUrl { ...LinkData } className: ButtonClass buttonType: ButtonType buttonVariant: ButtonVariant } fragment LinkItemData on Link { title text target url { ...LinkData } } fragment IElementData on _IComponent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData ...BlankExperienceData ...BlogSectionExperienceData ...BlogPostPageData ...LandingPageData ...StandardPageData ...StartPageData } } } fragment ArticleListElementData on ArticleListElement { articleListCount topics } fragment BlogListingBlockData on BlogListingBlock { _metadata { name: displayName } showFilters: BlogListingShowFilters selectedPageSize: BlogListingItemCount } fragment ButtonBlockData on ButtonBlock { children: ButtonText url: ButtonUrl { ...LinkData } className: ButtonClass buttonType: ButtonType buttonVariant: ButtonVariant } fragment CTAElementData on CTAElement { cta_text: Text cta_link: Link { ...LinkData } } fragment CardBlockData on CardBlock { cardButton: CardButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } cardColor: CardColor cardDescription: CardDescription { json html } cardHeading: CardHeading cardIcon: CardIcon { ...ReferenceData } cardImage: CardImage { ...ReferenceData } cardSubheading: CardSubHeading cardImageLayout: ImageLayout } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem ...BlockData ...ImageMediaComponentData ...VideoMediaComponentData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment ContentRecsElementData on ContentRecsElement { ElementDeliveryApiKey ElementRecommendationCount } fragment HeadingElementData on HeadingElement { headingText } fragment HeroBlockData on HeroBlock { heroImage: HeroImage { ...ReferenceData } eyebrow: Eyebrow heroHeading: Heading heroSubheading: SubHeading heroDescription: Description { json html } heroColor: HeroColor heroButton: HeroButton { ...ButtonBlockPropertyData } } fragment HomePageHeroBlockData on HomePageHeroBlock { homeHeroHeading: HomeHeroBlockHeading homeHeroSubheading: HomeHeroBlockSubHeading leftImage: HomeHeroLeftImage { ...ReferenceData } rightImage: HomeHeroRightImage { ...ReferenceData } homeHeroButton: HomeHeroButtonBlock { ...ButtonBlockPropertyData } } fragment HtmlBlockData on HtmlBlock { HtmlBlockHeading HtmlContent { json html } } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment LayoutContainerBlockData on LayoutContainerBlock { columns: ColumnsCount gap: GapSize LayoutContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } containerColor: ContainerBackgroundColor backgroundImage: ContainerBackgroundImage { ...ReferenceData } marginTop: ContainerMarginTop marginBottom: ContainerMarginBottom paddingBottom: ContainerPaddingBottom paddingTop: ContainerPaddingTop } fragment LayoutSettingsBlockData on LayoutSettingsBlock { mainMenu { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } contactInfoHeading serviceButtons { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } contactInfo { json html } footerMenus { ...IContentListItem ...ImageMediaComponentData ...VideoMediaComponentData } copyright legalLinks { ...LinkItemData } appIdentifiers } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { _metadata { displayName } MenuMenuHeading MegaMenuUrl { ...LinkData } MegaMenuContentArea { ...IContentData ...MenuNavigationBlockData ...CardBlockData } } fragment MenuNavigationBlockData on MenuNavigationBlock { _metadata { displayName } MenuNavigationHeading NavigationLinks { ...LinkItemData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment PageSeoSettingsData on PageSeoSettings { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ParagraphElementData on ParagraphElement { text { json } } fragment QuoteBlockData on QuoteBlock { quote: QuoteText color: QuoteColor active: QuoteActive name: QuoteProfileName profilePicture: QuoteProfilePicture { ...ReferenceData } location: QuoteProfileLocation } fragment RichTextElementData on RichTextElement { text { json html } } fragment TestimonialElementData on TestimonialElement { customerName customerLocation customerImage { ...ReferenceData } referenceTitle referenceText { json } } fragment TextBlockData on TextBlock { overline: TextBlockOverline headingSize: TextBlockHeadingSize heading: TextBlockHeading description: TextBlockDescription { json html } center: TextCenter width: TextBlockWidth className: TextClassName } fragment VideoElementData on VideoElement { title video { ...ReferenceData } placeholder { ...ReferenceData } } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogSectionExperienceData on BlogSectionExperience { ...ExperienceData } fragment BlogPostPageData on BlogPostPage { blogTitle: Heading blogSubtitle: ArticleSubHeading blogImage: BlogPostPromoImage { ...ReferenceData } blogBody: BlogPostBody { json } blogAuthor: ArticleAuthor blogTopics: Topic } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } MainContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment StandardPageData on StandardPage { sptitle: StandardPageHeading spsubtitle: StandardSubHeading spimage: StandardPromoImage { ...ReferenceData } spdescription: MainBody { json } } fragment StartPageData on StartPage { HomePageHeroContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } HomePageMainContentArea { ...BlockData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } fragment BlankSectionData on BlankSection { _metadata { key } } fragment BlockData on _IComponent { ...IContentData } fragment PageData on _IContent { ...IContentData } fragment LinkData on ContentUrl { base hierarchical default } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment ImageMediaComponentData on ImageMedia { alt: AltText meta: _metadata { url { default } name: displayName } } fragment VideoMediaComponentData on VideoMedia { meta: _metadata { url { default } name: displayName } } fragment IContentListItem on _IContent { ...IContentData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment ButtonBlockPropertyData on ButtonBlockProperty { children: ButtonText url: ButtonUrl { ...LinkData } className: ButtonClass buttonType: ButtonType buttonVariant: ButtonVariant } fragment LinkItemData on Link { title text target url { ...LinkData } } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionComponentNode { component { ...BlockData ...ElementData ...ArticleListElementData ...BlogListingBlockData ...ButtonBlockData ...CTAElementData ...CardBlockData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...HomePageHeroBlockData ...HtmlBlockData ...ImageElementData ...LayoutContainerBlockData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankSectionData } } } fragment ElementData on _IComponent { ...IElementData } fragment IElementData on _IComponent { _metadata { ...IContentInfo } _type: __typename }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

