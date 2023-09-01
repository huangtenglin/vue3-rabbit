import XtsSku from './XtsSku/index.vue'
import ImageView from './ImageView.vue'

export const componentPlugin = {
  install (app) {
    app.component('XtsImageView', ImageView)
    app.component('XtsSku', XtsSku)
  }
}