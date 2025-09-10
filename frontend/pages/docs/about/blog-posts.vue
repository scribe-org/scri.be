<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <Head>
    <Title>{{ $t("i18n._global.blog_posts") }}</Title>
  </Head>
  <PageDocs
    imgURL="/icons/docs/bootstrap_file_text"
    imgAltText="i18n.pages.docs.about.blog_posts.file_text_img_alt_text"
  >
    <PageBreadcrumbs />
    <h1 class="pb-2 font-bold">
      {{ $t("i18n._global.blog_posts") }}
    </h1>
    <div class="flex flex-col space-y-4 pb-4">
      <p>
        {{ $t("i18n.pages.docs.about.blog_posts.welcome_message") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.about.blog_posts.lack_of_localization_notice") }}
      </p>
      <h3>2025</h3>
      <ul class="list-disc pl-6">
        <li>
          August:
          <a
            class="link-text"
            href="https://outreachy-michael.hashnode.dev/from-self-doubt-to-automation-my-outreachy-internship-journey"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          describing the experience and learnings of
          <a
            class="link-text"
            href="https://www.outreachy.org/"
            target="_blank"
          >
            Outreachy
          </a>
          with Scribe
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://outreachy-michael.hashnode.dev/understanding-scribe-a-newcomers-guide-to-smart-language-learning-keyboards"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          with explanations about the Scribe community and language keyboards
          including
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Android"
            target="_blank"
          >
            Scribe-Android
          </a>
        </li>
        <li>
          June:
          <a
            class="link-text"
            href="https://outreachy-michael.hashnode.dev/introduce-yourself-who-are-you-michael"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          with an introduction from Scribe's
          <a
            class="link-text"
            href="https://www.outreachy.org/"
            target="_blank"
          >
            Outreachy
          </a>
          intern
        </li>
        <!-- HERE -->
        <li>
          April:
          <a
            class="link-text"
            href="https://scribe-server.hashnode.dev/deploy-scribe-server-toolforge"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          introducing the
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Server"
            target="_blank"
          >
            Scribe-Server
          </a>
          deployment process and working with
          <a
            class="link-text"
            href="https://admin.toolforge.org/"
            target="_blank"
          >
            Wikimedia Toolforge
          </a>
        </li>
        <li>
          January:
          <a
            class="link-text"
            href="https://axif.hashnode.dev/automating-query"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          presenting the Wikidata query generation process written as a part of
          Scribe's
          <a
            class="link-text"
            href="https://www.outreachy.org/"
            target="_blank"
          >
            Outreachy
          </a>
          internship
        </li>
        <li>
          January:
          <a
            class="link-text"
            href="https://axif.hashnode.dev/how-to-start-scribe"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          discussing the architecture of Scribe applications including
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          and how to start contributing
        </li>
        <li>
          January:
          <a
            class="link-text"
            href="https://axif.hashnode.dev/struggles-wins-and-scribe-data-my-outreachy-journey"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          discussing working with Wikidata and its database dumps within
          Scribe's
          <a
            class="link-text"
            href="https://www.outreachy.org/"
            target="_blank"
          >
            Outreachy
          </a>
          internship
        </li>
      </ul>
      <h3>2024</h3>
      <ul class="list-disc pl-6">
        <li>
          December:
          <a
            class="link-text"
            href="https://axif.hashnode.dev/create-scribe-data-wikidata-based-translation"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          discussing the development of the
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          translation generation process as a part of
          <a
            class="link-text"
            href="https://www.outreachy.org/"
            target="_blank"
          >
            Outreachy
          </a>
        </li>
        <li>
          October:
          <a
            class="link-text"
            href="https://medium.com/@arpita151103/scribe-an-open-source-solution-for-language-learning-and-data-accessibility-092dab026fd6"
            target="_blank"
          >
            Blog post on Medium
          </a>
          discussing the
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          development process, community and features
        </li>
        <li>
          October:
          <a
            class="link-text"
            href="https://medium.com/@mhmohona/ins-and-outs-of-scribe-data-cli-bd51202aa7c6"
            target="_blank"
          >
            Blog post on Medium
          </a>
          describing the main features of
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
        </li>
        <li>
          September:
          <a
            class="link-text"
            href="https://medium.com/@mhmohona/the-final-stretch-gsoc-journey-with-scribe-data-1740084c958d"
            target="_blank"
          >
            Final Google Summer of Code report
          </a>
          on the creation of the
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          CLI
        </li>
        <li>
          August:
          <a
            class="link-text"
            href="https://jagmarcel.hashnode.dev/gsoc-2024-final-report"
            target="_blank"
          >
            Final Google Summer of Code report
          </a>
          on the creation of Scribe's cross-language translation functionality
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://medium.com/@mhmohona/halfway-there-my-gsoc-adventure-with-scribe-data-cli-2ffe6d727ecb"
            target="_blank"
          >
            Blog post on Medium
          </a>
          about the progress on creating the
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          CLI
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://jagmarcel.hashnode.dev/gsoc-2024-midterm-report"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          providing an midterm report on the localization and translation
          expansion for
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-iOS"
            target="_blank"
          >
            Scribe-iOS
          </a>
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://jagmarcel.hashnode.dev/my-first-experiences-with-gsoc"
            target="_blank"
          >
            Blog post on Hashnode
          </a>
          about the initial steps towards the localization of
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-iOS"
            target="_blank"
          >
            Scribe-iOS
          </a>
        </li>
        <li>
          June:
          <a
            class="link-text"
            href="https://medium.com/@mhmohona/first-month-as-a-gsoc-intern-building-scribe-data-cli-d0c12c9e8371"
            target="_blank"
          >
            Blog post on Medium
          </a>
          about the planned
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          CLI
        </li>
        <li>
          April:
          <a
            class="link-text"
            href="https://medium.com/@mhmohona/scribe-data-a-guide-to-open-source-language-data-a801c59db4c9"
            target="_blank"
          >
            Blog post on Medium
          </a>
          about
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-Data"
            target="_blank"
          >
            Scribe-Data
          </a>
          and its functionalities
        </li>
        <li>
          February:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/1lMhYiQx1R99SVGhbikUGjOVaFgPPASvbzM2Bsu3NXSg/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for Scribe's participation at the
          <a
            class="link-text"
            href="https://www.mediawiki.org/wiki/Wikimedia_Tech_Safari_Program"
            target="_blank"
          >
            Wikimedia Tech Safari Program
          </a>
        </li>
      </ul>
      <h3>2023</h3>
      <ul class="list-disc pl-6">
        <li>
          August:
          <a
            class="link-text"
            href="https://saurabhjamadagni.hashnode.dev/gsoc-23-final-work-submission"
            target="_blank"
          >
            Scribe-iOS final submission report
          </a>
          for
          <a
            class="link-text"
            href="https://www.mediawiki.org/wiki/Google_Summer_of_Code/2023#Accepted_projects:~:text=links%3A%20Phabricator%20issue-,3.%20Adding%20a%20Menu%20and%20Keyboards%20to%20Scribe%2DiOS,-%5Bedit%5D"
            target="_blank"
          >
            Google Summer of Code 2023
          </a>
        </li>
        <li>
          June:
          <a
            class="link-text"
            href="https://saurabhjamadagni.hashnode.dev/nested-uitableviews-apples-built-in-viewcontrollers"
            target="_blank"
          >
            Scribe-iOS development blog post
          </a>
          on Nested UITableViews & Apple's built-in ViewControllers in app menu
          for
          <a
            class="link-text"
            href="https://www.mediawiki.org/wiki/Google_Summer_of_Code/2023#Accepted_projects:~:text=links%3A%20Phabricator%20issue-,3.%20Adding%20a%20Menu%20and%20Keyboards%20to%20Scribe%2DiOS,-%5Bedit%5D"
            target="_blank"
          >
            Google Summer of Code 2023
          </a>
        </li>
        <li>
          March:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/1W4ZkGi9UDDiTxM_silEij0gTE8YEubluHxe78xoqEP0/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for a talk at
          <a class="link-text" href="https://bhnt.c-base.org/" target="_blank">
            Berlin Hack and Tell
          </a>
          (
          <a
            class="link-text"
            href="https://bhnt.c-base.org/2023-03-28-no87-moore-hacks"
            target="_blank"
          >
            Hack of the month winner 🏆
          </a>
          )
        </li>
      </ul>
      <h3>2022</h3>
      <ul class="list-disc pl-6">
        <li>
          August:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/12WNSt5xgNIAmSxPfvjno9-sBMGlvxG_xSaAxmHQDRNQ/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for a session at the
          <a
            class="link-text"
            href="https://wikimania.wikimedia.org/wiki/2022:Hackathon"
            target="_blank"
          >
            2022 Wikimania Hackathon
          </a>
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/10Ai0-b8XUj5u9Hw4UgBtB7ufiPhvfFrb1vEUEyXYr5w/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for a talk at the
          <a
            class="link-text"
            href="https://www.meetup.com/cocoaheads-berlin/"
            target="_blank"
          >
            CocoaHeads Berlin meetup
          </a>
        </li>
        <li>
          July:
          <a
            class="link-text"
            href="https://www.youtube.com/watch?v=4GpFN0gGmy4&list=PL66MRMNlLyR7p9wsYVfuqJOjKZpbuwp8U&index=6"
            target="_blank"
          >
            Video on Scribe
          </a>
          for
          <a
            class="link-text"
            href="https://meta.wikimedia.org/wiki/Celtic_Knot_Conference_2022"
            target="_blank"
          >
            Wikimedia Celtic Knot 2022
          </a>
        </li>
        <li>
          June:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/1K2lj8PPgdx12I-xuhm--CBLrGm-Cz50NJmbp96zpGrk/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for a talk with the
          <a
            class="link-text"
            href="https://www.wikidata.org/wiki/Wikidata:WikiProject_LD4_Wikidata_Affinity_Group"
            target="_blank"
          >
            LD4 Wikidata Affinity Group
          </a>
        </li>
        <li>
          June:
          <a
            class="link-text"
            href="https://github.com/scribe-org"
            target="_blank"
          >
            Scribe
          </a>
          featured for new developers on
          <a
            class="link-text"
            href="https://www.mediawiki.org/wiki/New_Developers#Scribe"
            target="_blank"
          >
            MediaWiki
          </a>
        </li>
        <li>
          May:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/1Cu3VwQ3lJUp5W84YDe0AFYS-6zfBxKsm0MI-OMl_IzY/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for
          <a
            class="link-text"
            href="https://www.mediawiki.org/wiki/Wikimedia_Hackathon_2022"
            target="_blank"
          >
            Wikimedia Hackathon 2022
          </a>
        </li>
        <li>
          March:
          <a
            class="link-text"
            href="https://tech-news.wikimedia.de/en/2022/03/18/lexicographical-data-for-language-learners-the-wikidata-based-app-scribe/)
          on [Scribe-iOS](https://github.com/scribe-org/Scribe-iOS"
            target="_blank"
          >
            Blog post
          </a>
          on
          <a
            class="link-text"
            href="https://github.com/scribe-org/Scribe-iOS"
            target="_blank"
          >
            Scribe-iOS
          </a>
          for
          <a
            class="link-text"
            href="https://tech-news.wikimedia.de/en/homepage/"
            target="_blank"
          >
            Wikimedia Tech News
          </a>
          (
          <a
            class="link-text"
            href="https://tech-news.wikimedia.de/2022/03/18/sprachenlernen-mit-lexikografische-daten-die-wikidata-basierte-app-scribe/"
            target="_blank"
          >
            Deutsch
          </a>
          )
        </li>
        <li>
          March:
          <a
            class="link-text"
            href="https://docs.google.com/presentation/d/16ld_rCbwJCiAdRrfhF-Fq9Wm_ciHCbk_HCzGQs6TB1Q/edit?usp=sharing"
            target="_blank"
          >
            Presentation slides
          </a>
          for
          <a
            class="link-text"
            href="https://diff.wikimedia.org/event/wikidata-data-reuse-days-2022/"
            target="_blank"
          >
            Wikidata Data Reuse Days 2022
          </a>
        </li>
      </ul>
    </div>
    <PageCommunityFooter>
      <BtnRouteInternal
        class="w-full"
        :cta="true"
        label="i18n.pages.docs._global.return_to_docs_home"
        linkTo="/"
        fontSize="lg"
        ariaLabel="i18n.pages.docs._global.return_to_docs_home_aria_label"
      />
    </PageCommunityFooter>
  </PageDocs>
</template>
