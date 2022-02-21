import React from "react";

export type NavbarProps = {
  hideMenu?: boolean;
  setHideMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavbarPropsStyles = {
  hideMenu?: boolean;
};
