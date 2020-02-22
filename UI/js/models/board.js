// import { Pipeline } from './pipeline.js';
class Board {
  constructor(params) {
    this.name = params.name;
    
    if (params.pipelines) {
      this.pipelines = params.pipelines.map(pipeline => new Pipeline(pipeline));
    }
  }

  // set pipelines(pipelines) {
  //   // console.log("this", this);
  //   // pipelines.map(p => console.log(p));
  //   pipelines.map(pipeline => new Pipeline(pipeline));
  //   console.log("pipelines", this.pipelines);
  // }

  // get pipelines() {
  //   return this.pipelines;
  // }
}
