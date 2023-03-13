import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="container">
      <div className="subscribe">
        <h2>Subscribe to our NEWSLETTER</h2>
        <p>
          Get daily news directly to you mail to always keep you updated on
          current Defi and NFT trends
        </p>
        <div className="send-mail">
          <input type="email" name="email" id="" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
