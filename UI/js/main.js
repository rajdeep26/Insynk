function createElement(tag, className, innerText) {
  var element = document.createElement(tag);
  element.className = className;

  if (innerText !== undefined) {
    element.innerText = innerText;
  }

  return element;
}

function createIssue(issue) {
  var issueContainer = createElement('div', 'issue');

  var issueTitleElement = createElement('div', 'issue-title', issue.title);
  var issueDescriptionElement = createElement('div', 'issue-description', issue.description);
  var issueAssigneeElement = createElement('div', 'issue-assignee', issue.assignee);

  issueContainer.appendChild(issueTitleElement);
  issueContainer.appendChild(issueDescriptionElement);
  issueContainer.appendChild(issueAssigneeElement);

  return issueContainer;
}

function initIssues(pipelineContainer, issues) {
  if (issues == undefined) return;

  issues.map(function(issue) {
    pipelineContainer.appendChild(createIssue(issue));
  });
}

function createPipeline(pipeline) {
  var pipelineContainer = createElement('div', 'pipeline');
  
  var pipelineNameElement = createElement('div', 'pipeline-name', pipeline.name)
  pipelineContainer.appendChild(pipelineNameElement)
  
  initIssues(pipelineContainer, pipeline.issues);
  return pipelineContainer;
}

function initPipelines(board) {
  var pipelinesContainer = document.getElementsByClassName('pipelines-container')[0];
  
  board.pipelines.forEach(function (pipeline) {
    pipelinesContainer.appendChild(createPipeline(pipeline));
  })

  var newPipeline = new Pipeline({name: 'Create New Pipeline', issues: []})
  pipelinesContainer.appendChild(createPipeline(newPipeline));
}

function initBoard(board) {
  var boardTitleElement = document.getElementById('boardName');
  boardTitleElement.innerText = board.name;

  initPipelines(board);
}

// Initialization
window.onload = function () {
  var boardJson = {
    name: "Task Board",
    pipelines: [
      {
        name: 'New',
        issues: [
          {
            title: "First Task",
            description: "This is some description",
            assignee: 'Rajdeep Mandrekar'
          },
          {
            title: "Second Task with a very long title",
            description: "This is some description again",
            assignee: 'Anamay Saxena'
          },
          {
            title: "Third Task",
            description: "This is some description",
            assignee: 'Wolfgang Furtado'
          }
        ]
      },
      {
        name: 'In Progress',
        issues: [
          {
            title: "This Task is in progress",
            description: "This is some description",
            assignee: 'Rajdeep Mandrekar'
          }
        ]
      }, 
      {
        name: 'Review',
        issues: []
      }, 
      {
        name: 'Done',
        issues: [
          {
            title: "First Completed Task",
            description: "This is some description",
            assignee: 'Rajdeep Mandrekar'
          }
        ]
      }
    ]
  }

  var b = new Board(boardJson);
  b.pipelines = boardJson.pipelines;
  console.log("board pipelines", b.pipelines);
  initBoard(b);
}