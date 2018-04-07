import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/views/landing/Landing.vue'
import StoryView from '@/views/story/Story.vue'
import PlayView from '@/views/play/Play.vue'
import LevelEndView from '@/views/level_end/LevelEnd.vue'
import LevelSuccessView from '@/views/level_end/success/Success.vue'
import LevelSkippedView from '@/views/level_end/skipped/Skipped.vue'
import LevelGameCompleteView from '@/views/level_end/game_complete/GameComplete.vue'
import GameEndView from '@/views/game_end/GameEnd.vue'
import CongratulationsView from '@/views/game_end/congratulations/Congratulations.vue'
import HighScoresView from '@/views/game_end/high_scores/HighScores.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView
    },
    {
      path: '/level_end',
      name: 'levelEnd',
      component: LevelEndView,
      children: [
        {
          path: 'success',
          name: 'levelSuccess',
          component: LevelSuccessView
        },
        {
          path: 'skipped',
          name: 'levelSkipped',
          component: LevelSkippedView
        },
        {
          path: 'game_complete',
          name: 'levelGameComplete',
          component: LevelGameCompleteView
        },
      ]
    },
    {
      path: '/game_end',
      name: 'gameEnd',
      component: GameEndView,
      children: [
        {
          path: 'congratulations',
          name: 'Congratulations',
          component: CongratulationsView
        },
        {
          path: 'high_scores',
          name: 'highScores',
          component: HighScoresView
        }
      ]
    },

  ]
})
