import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Summer" timeAgo="Today at 4:11PM" comment={faker.lorem.sentence()} image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jennifer" timeAgo="Today at 6:19PM" comment={faker.lorem.sentence()} image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Bowie" timeAgo="Today at 6:41PM" comment={faker.lorem.sentence()} image={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
