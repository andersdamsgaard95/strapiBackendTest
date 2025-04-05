import type { Schema, Struct } from '@strapi/strapi';

export interface AnchorLinkAnchorLink extends Struct.ComponentSchema {
  collectionName: 'components_anchor_link_anchor_links';
  info: {
    displayName: 'Anchor Link';
  };
  attributes: {
    open_in_new_tab: Schema.Attribute.Boolean;
    path: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HeroBlockHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_block_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    amIHero: Schema.Attribute.Boolean;
    Button: Schema.Attribute.Component<'anchor-link.anchor-link', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface TextBlockTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_text_block_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    AmIOrange: Schema.Attribute.Boolean;
    Heading: Schema.Attribute.String;
    Text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'anchor-link.anchor-link': AnchorLinkAnchorLink;
      'hero-block.hero': HeroBlockHero;
      'text-block.text-block': TextBlockTextBlock;
    }
  }
}
