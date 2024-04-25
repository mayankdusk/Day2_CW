const Title = () => {
  return <h1><hr/>Learn web development<br/><br/></h1>;
};

const para1 = () => {
    return (
    <p>
        Welcome to the MDN learning area. This set of articles aims to guide
        complete beginners to web development with all that they need to start
        coding websites.
        <br/>
        <br/>
      </p>
    );
};

const para2 = () => {
  return (
    <p>
      The aim of this area of MDN is not to take you from "beginner" to "expert"
      but to take you from "beginner" to "comfortable." From there, you should
      be able to start making your way, learning from{" "}
      <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
        the rest of MDN
      </a>
      , resources that assume a lot of previous knowledge.
      <br />
      <br />
    </p>
  );
};

const para3 = () => {
  return (
    <p>
      If you are a complete beginner, web development can be challenging - we
      will hold your hand and provide enough detail for you to feel comfortable
      and learn the topics properly. You should feel at home whether you are a
      studunt learning web development(on your own as a part of the class), a
      teacher looking for class materials, a hobbyist, aor someone who just
      wants to understand more about how web technologies work.
    </p>
  );
};

const MainContainer = () => {
    // let arr = ["Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.",
    // 'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the rest of MDN, resources that assume a lot of previous knowledge.' , "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a studunt learning web development(on your own as a part of the class), a teacher looking for class materials, a hobbyist, aor someone who just wants to understand more about how web technologies work."];
  return (
    <div>
      <Title />
      {para1()}
      {para2()}
      {para3()}
      </div>
      /* {arr.map((name) => {
        return <p>{name}</p>;
      })}; */
    
  );
};

ReactDOM.render(<MainContainer />, document.querySelector("#MainContainer"));
