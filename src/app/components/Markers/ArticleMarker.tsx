import * as React from 'react';
import { Card, Grid, Icon, Image, Item, Label, Popup } from 'semantic-ui-react';
import * as toTitleCase from 'to-title-case';
import * as styles from './styles.css';
import { IArticleDocument } from "../../models/articleDocument";

export const renderSentiment = (sentiment) => {
  const polarity = toTitleCase(sentiment.polarity);
  const confidence = Math.round(sentiment.polarity_confidence * 100);

  switch (sentiment.polarity) {
    case 'positive':
      return <Label icon="smile" content={`${polarity} ${confidence}%`} />;
    case 'neutral':
      return <Label icon="meh" content={`${polarity} ${confidence}%`} />;
    case 'negative':
      return <Label icon="frown" content={`${polarity} ${confidence}%`} />;
  }
};

const imageStyle = { height: '127px' };

interface IArticleMarker {
  document: IArticleDocument;
  lat: number;
  lng: number;
  source: string;
  sourceUrl: string;
}

interface ILocalState {
  showTooltip: boolean;
}
export default class ArticleMarker extends React.Component<IArticleMarker, ILocalState> {
  state = {
    showTooltip: false,
  };

  render() {
    const {
      document: {
        image,
      authors,
      entities,
      url,
      title,
      categories,
      sentiment,
      summary,
      publish_date,
      },
      source,
      sourceUrl,
    } = this.props;

    return (
      <div className={styles.container}>
        <Popup
          position="right center"
          wide="very"
          trigger={<Icon color="red" name="marker" size="huge" />}
          hoverable
          flowing
        >
          <Item.Group>
            <Item>
              <Item.Image>
                <Image
                  src={image}
                  shape="rounded"
                  style={imageStyle}
                  alt={title}
                />
                <Item.Extra>
                  <Label>
                    <Icon name="newspaper" />
                    <a href={sourceUrl} target="_blank">{source}</a>
                  </Label>
                  {authors.map((author, i) => {
                    return (
                      <Label
                        key={i}
                        icon="user outline"
                        content={author}
                      />
                    );
                  })}
                  {categories.map((category, i) => {
                    const [main, sub] = category.label.split('-');
                    return (
                      <Popup
                        position="left center"
                        key={i}
                        trigger={<Label content={toTitleCase(main)} />}
                        hoverable
                      >
                        {toTitleCase(sub)}
                      </Popup>
                    );
                  })}
                  {renderSentiment(sentiment)}
                </Item.Extra>
                <Item.Extra>{new Date(publish_date).toLocaleDateString()}</Item.Extra>
              </Item.Image>
              <Item.Content>
                <Item.Header>
                  <a href={url} target="_blank">
                    {title}
                  </a>
                </Item.Header>
                <Item.Meta>Summary</Item.Meta>
                <Item.Description className={styles.description}>
                  {summary.paragraph}
                </Item.Description>
                <Item.Extra style={{ width: '500px' }}>
                  <Label color="red" pointing="right" basic>Entities</Label>
                  {entities.person && entities.person.map((person, i) => (
                    <Label
                      icon="user outline"
                      key={i}
                      content={person}
                    />
                  ))}
                  {entities.organization && entities.organization.map((org, i) => (
                    <Label
                      icon="briefcase"
                      key={i}
                      content={org}
                    />
                  ))}
                  {entities.location && entities.location.map((loc, i) => (
                    <Label
                      icon="world"
                      key={i}
                      content={loc}
                    />
                  ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Popup>
        {/*{article.locations.length > 1
          ? (
            <Badge
              badgeContent={article.locations.length}
              badgeStyle={{ top: '26px', right: '26px' }}
              primary
            >
              <IconButton
                iconStyle={{ width: '36px', height: '36px' }}
                style={{ width: '72px', height: '72px', padding: '16px' }}
              >
                <ActionRoom color="#f44336" />
              </IconButton>
            </Badge>
          ) : (
            <IconButton
              iconStyle={{ width: '36px', height: '36px' }}
              style={{ width: '72px', height: '72px', padding: '16px' }}
            >
              <ActionRoom color="#f44336" />
            </IconButton>
          )}*/}
      </div>
    );
  }
}
