import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const [copied, setCopied] = useState(false);

  const copyClipboard = () => {
    const el = document.createElement('textarea');
    el.value = 'yarn add react-simple-scheduler';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }

  useEffect(()=> {
    if(copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied])

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            <code className={styles.code} onCopy={()=>{
               setCopied(true);
            }}>
                yarn add react-simple-scheduler
                <button className={styles.copyButton} onClick={copyClipboard}>
                    {copied ? '✅' : '📋'}
                </button>
            </code>
          {/*<Link*/}
          {/*  className="button button--secondary button--lg"*/}
          {/*  to="/docs/intro">*/}
          {/*  Docusaurus Tutorial - 5min ⏱️*/}
          {/*</Link>*/}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
