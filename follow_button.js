// React Component!
// Follow <-> following
function FollowButton() {
  const [following, setFollowing] = React.useState(false);
  
  const commomBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold"
  };

  const followBtnStyle = {
    ...commomBtnStyle,
    backgroundColor: "black",
    color: "white",
  };
  const followingBtnStyle = {
    ...commomBtnStyle,
    backgroundColor: "white",
    color: "black",
    border:"1px solid #cfd9de",
  };


  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
      style: following ? followingBtnStyle : followBtnStyle
    },
    following ? "following" : "Follow");

}


const domContainer = document.querySelector('#follow_button_container');
ReactDOM.render(React.createElement(FollowButton), domContainer);