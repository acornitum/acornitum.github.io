import Header from "./Header"
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import { ReactPortal, AwaitedReactNode, ReactElement, JSXElementConstructor, ReactNode } from "react"

export default function Layout(props: { siteTitle: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; siteDescription: any; children: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) {
  return (
    <section
    className={styles.layout}
  >
    <Meta
      siteTitle={props.siteTitle}
      description={props.siteDescription}
    />
    <Header siteTitle={props.siteTitle} />
    <div className={styles.content}>{props.children}</div>
  </section>
  )
}