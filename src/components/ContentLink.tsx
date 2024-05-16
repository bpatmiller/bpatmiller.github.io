import { Button, LinkBox, LinkOverlay, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { JsxElement } from "typescript";
import { IoMdGitNetwork, IoMdGlobe } from "react-icons/io";
interface ContentLinkProps {
  children?: JsxElement | JsxElement[];
  buttonProps?: ButtonProps;
  link: string;
}

const CodeLink = (props: ContentLinkProps) => {
  return (
    <LinkBox>
      <LinkOverlay href={props.link}>
        <Button leftIcon={<IoMdGitNetwork />} {...props.buttonProps}>
          See the code
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

const ContentLink = (props: ContentLinkProps) => {
  return (
    <LinkBox>
      <LinkOverlay href={props.link}>
        <Button leftIcon={<IoMdGlobe />} {...props.buttonProps}>
          See the demo
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export { ContentLink, CodeLink };
