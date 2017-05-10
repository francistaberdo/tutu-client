import * as React from 'react';
import * as io from 'socket.io-client';
import { IArticleDocument } from '../../models/articleDocument';
import { Item, Popup, Label, Icon } from "semantic-ui-react";
import { renderSentiment } from "../Markers/ArticleMarker";
import * as toTitleCase from 'to-title-case';
import * as styles from './styles.css';

interface ILocalState {
  articles: IArticleDocument[];
}
export default class Sidebar extends React.Component<{}, Partial<ILocalState>> {
  state = {
    articles: [] as IArticleDocument[],
  };
  componentDidMount() {
    const socket = io('http://localhost:3000');

    socket.on('new_article', (article) => {
      console.log(article);
      this.setState({ articles: [...this.state.articles, article] });
    });
  }

  render() {

    return (
      <div className={styles.container}>
        <Item.Group>
          {this.state.articles.map((article) => {
            const {
              url,
              title,
              summary,
              publish_date,
              sentiment,
              authors,
              categories,
              image
            } = article;

            return (
              <Item>
                <Item.Image size="tiny" src={image} />
                <Item.Content>
                  <Item.Header as="a" className={styles.description}>
                    <a href={url} target="_blank">
                      {title}
                    </a>
                  </Item.Header>
                  <Item.Description className={styles.description}>
                    {summary.sentences[0]}
                  </Item.Description>
                  <Item.Extra>{new Date(publish_date).toLocaleDateString()}</Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </div>
    );
  }
}

