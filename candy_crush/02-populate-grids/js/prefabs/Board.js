var Match3 = Match3 || {};

Match3.Board = function(state, rows, cols, blockVariations) {

  this.state = state;
  this.rows = rows;
  this.cols = cols;
  this.blockVariations = blockVariations;

  //main grid
  this.grid = [];

  var i,j;
  for(i = 0; i < rows; i++) {
    this.grid.push([]);

    for(j = 0; j < cols; j++) {
      this.grid[i].push(0);
    }
  }

  //reserve grid on the top, for when new blocks are needed
  this.reserveGrid = [];

  this.RESERVE_ROW = 5;

  for(i = 0; i < this.RESERVE_ROW; i++) {
    this.reserveGrid.push([]);

    for(j = 0; j < cols; j++) {
      this.reserveGrid[i].push(0);
    }
  }

  //populate grids
  this.populateGrid();
  this.populateReserveGrid();

};

Match3.Board.prototype.populateGrid = function(){
  var i,j,variation;
  for(i = 0; i < this.rows; i++) {
    for(j = 0; j < this.cols; j++) {
      variation = Math.floor(Math.random() * this.blockVariations) + 1;
      this.grid[i][j] = variation;
    }
  }
};

Match3.Board.prototype.populateReserveGrid = function(){
  var i,j,variation;
  for(i = 0; i < this.RESERVE_ROW; i++) {
    for(j = 0; j < this.cols; j++) {
      variation = Math.floor(Math.random() * this.blockVariations) + 1;
      this.reserveGrid[i][j] = variation;
    }
  }
};

Match3.Board.prototype.consoleLog = function() {
  var i,j;
  var prettyString = '';

  for(i = 0; i < this.RESERVE_ROW; i++) {
    prettyString += '\n';
    for(j = 0; j < this.cols; j++) {
      prettyString += ' ' + this.reserveGrid[i][j];
    }
  }

  prettyString += '\n';

  for(j = 0; j < this.cols; j++) {
    prettyString += ' -';
  }

  for(i = 0; i < this.rows; i++) {
    prettyString += '\n';
    for(j = 0; j < this.cols; j++) {
      prettyString += ' ' + this.grid[i][j];
    }
  }

  console.log(prettyString);
};


