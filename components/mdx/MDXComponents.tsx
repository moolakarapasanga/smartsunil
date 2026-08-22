import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { CommandBlock } from "./CommandBlock";
import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";

export const mdxComponents: MDXComponents = {
  Callout,
  CommandBlock,
  HttpRequest,
  HttpResponse,
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  a: (props) => <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel={props.href?.startsWith("http") ? "noreferrer" : undefined} />,
  pre: (props) => <pre {...props} />
};
