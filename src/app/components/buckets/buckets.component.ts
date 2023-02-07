import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {

  firstBucket: number = 0;
  secondBucket: number = 0;
  amountWanted: number = 0;
  firstBucketSteps: Array<number> = [];
  secondBucketSteps: Array<number> = [];
  explanationSteps: Array<string> = [''];

  ngOnInit(): void {}

  solveChallenge() {
    this.firstBucketSteps = [];
    this.secondBucketSteps = [];
    this.explanationSteps = [];
    if (this.firstBucket && this.secondBucket < this.amountWanted) {
      this.firstCase();
    }
    if (this.firstBucket === this.secondBucket) {
      if (this.firstBucket && this.secondBucket != this.amountWanted) {
        this.secondCase();
      } else if (this.firstBucket && this.secondBucket === this.amountWanted) {
        this.thirdCase();
      }
    }
    if (this.firstBucket > this.secondBucket){
      this.fourthCase();
    }
    if (this.firstBucket < this.secondBucket){
      this.fifthCase();
    }

  }

  // The first and second bucket are less than the amount wanted
  firstCase() {
    console.log("Can't be solve");
    this.explanationSteps.push("Can't be solve");
  }

  // The first and second bucket are equal but they are not equal to the amount wanted
  secondCase() {
    console.log("Can't be solve");
    this.explanationSteps.push("Can't be solve");
  }

  // The first and second bucket are equal to the amount wanted
  thirdCase() {
    console.log("Fill first or second bucket");
    this.explanationSteps.push("Fill first or second bucket");
  }

  fourthCase() {
    this.firstBucketSteps.push(this.firstBucket);
    this.explanationSteps.push('Fill first');
    this.secondBucketSteps.push(0);

    while (this.firstBucketSteps[this.firstBucketSteps.length - 1] != this.amountWanted && this.secondBucketSteps[this.secondBucketSteps.length - 1] != this.amountWanted) {
      let minimunValue = Math.min(this.firstBucketSteps[this.firstBucketSteps.length - 1], this.secondBucket - this.secondBucketSteps[this.secondBucketSteps.length - 1])

      this.secondBucketSteps.push(this.secondBucketSteps[this.secondBucketSteps.length - 1] += minimunValue);
      this.explanationSteps.push('Transfer to second');

      this.firstBucketSteps.push(this.firstBucketSteps[this.firstBucketSteps.length - 1] -= minimunValue);

      if (this.firstBucketSteps[this.firstBucketSteps.length - 1] == this.amountWanted || this.secondBucketSteps[this.secondBucketSteps.length - 1] == this.amountWanted) {
        this.explanationSteps.push('Solved');
        break;
      }

      if (this.firstBucketSteps[this.firstBucketSteps.length - 1] == 0) {
        this.firstBucketSteps.push(this.firstBucket);
        this.explanationSteps.push('Fill first');
      }

      if (this.secondBucketSteps[this.secondBucketSteps.length - 1] == this.secondBucket) {
        this.secondBucketSteps.push(0);
        this.explanationSteps.push('Empty second');
      }
    }
    console.log(this.firstBucketSteps, this.secondBucketSteps);
  }

  fifthCase() {
    this.firstBucketSteps.push(0);
    this.secondBucketSteps.push(this.secondBucket);
    this.explanationSteps.push('Fill second');

    while (this.firstBucketSteps[this.firstBucketSteps.length - 1] != this.amountWanted && this.secondBucketSteps[this.secondBucketSteps.length - 1] != this.amountWanted) {
      let minimunValue = Math.min(this.secondBucketSteps[this.secondBucketSteps.length - 1], this.firstBucket - this.firstBucketSteps[this.firstBucketSteps.length - 1])

      this.secondBucketSteps.push(this.secondBucketSteps[this.secondBucketSteps.length - 1] -= minimunValue);
      this.firstBucketSteps.push(this.firstBucketSteps[this.firstBucketSteps.length - 1] += minimunValue);
      this.explanationSteps.push('Transfer to first');

      if (this.firstBucketSteps[this.firstBucketSteps.length - 1] == this.amountWanted || this.secondBucketSteps[this.secondBucketSteps.length - 1] == this.amountWanted) {
        this.explanationSteps.push('Solved');
        break;
      }

      if (this.secondBucketSteps[this.secondBucketSteps.length - 1] == 0) {
        this.secondBucketSteps.push(this.secondBucket);
        this.explanationSteps.push('Fill second');
      }

      if (this.firstBucketSteps[this.firstBucketSteps.length - 1] == this.firstBucket) {
        this.firstBucketSteps.push(0);
        this.explanationSteps.push('Empty first');
      }
    }
    console.log(this.firstBucketSteps, this.secondBucketSteps);
  }

}
