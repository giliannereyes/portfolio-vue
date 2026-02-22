<script setup>
import SiteHeader from '@/widgets/site-header/ui/SiteHeader.vue'
import ReadingProgress from '@/widgets/reading-progress/ui/ReadingProgress.vue'
import HeroSection from '@/widgets/hero/ui/HeroSection.vue'
import AboutSection from '@/widgets/about/ui/AboutSection.vue'
import ProjectsSection from '@/widgets/projects/ui/ProjectsSection.vue'
import ExperienceSection from '@/widgets/experience/ui/ExperienceSection.vue'
import SkillsSection from '@/widgets/skills/ui/SkillsSection.vue'
import GithubStatsSection from '@/widgets/github-stats/ui/GithubStatsSection.vue'
import ContactSection from '@/widgets/contact/ui/ContactSection.vue'
import SiteFooter from '@/widgets/site-footer/ui/SiteFooter.vue'
import BackToTop from '@/widgets/back-to-top/ui/BackToTop.vue'
</script>

<template>
  <ReadingProgress />
  <SiteHeader />

  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <GithubStatsSection />
    <ContactSection />
  </main>

  <SiteFooter />
  <BackToTop />
</template>
