import {
  faGithub, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonGroup, CardActionArea, CardActions, Link } from "@mui/material";
import React from "react";
import StyledButton from "./StyledButton";

const SocialButtonGroup = () => {
  const socials = {
    github: { link: "https://www.github.com/Yan-Daojiang" },
    twitter: { link: "https://www.twitter.com/yandaojiang" },
    email: { link: "mailto:yandaojiang@whu.edu.cn"},
  };

  return (
    <CardActionArea sx={{ cursor: "default", backgroundColor: "#fefefa" }}>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="text" sx={{ border: "none" }}>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.github.link}
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.twitter.link}
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.email.link}
          >
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
          </StyledButton>
        </ButtonGroup>
      </CardActions>
    </CardActionArea>
  );
};

export default SocialButtonGroup;
