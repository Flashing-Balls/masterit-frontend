import Preact from 'preact';
import Video from '../Video';
import Avatar from '../Avatar';
import Comment from './Comment/';
import Input from '../Input/';
import './post.sass';

export default class Post extends Preact.Component {
  renderComments() {
    return this.props.data.comments.map(
      ( { user, text, id } ) => ( <Comment key={ id } user={ user } text={ text } /> )
    );
  }
  render() {
    const { user, video } = this.props.data;
    return (
      <article className="post">
        <header className="post__header">
          <Avatar avatar={ user.avatar } fullname={ user.fullname } username={ user.username } />
        </header>
        <main>
          <section>
            <Video url={ video } />
          </section>
          <section className="comments">
            { this.renderComments() }
          </section>
        </main>
        <Input placeholder="Doin' great mate" type="text" />
      </article>
    );
  }
}
