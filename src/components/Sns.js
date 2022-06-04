// import InstagramEmbed from "react-instagram-embed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "../styles/components/Sns.module.scss";

const Sns = () => {
  return (
    <div className={styles.container}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="avalanche_shiga"
        options={{ height: 600 }}
      />
      {/* <InstagramEmbed
        url="instagram.com/avalanche.official/"
        clientAccessToken={process.env.INSTA_CLIENT_ACCESS_TOKEN}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      /> */}
    </div>
  );
};

export default Sns;
