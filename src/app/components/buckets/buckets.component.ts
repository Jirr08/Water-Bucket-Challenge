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
    if (this.firstBucket && this.secondBucket < this.amountWanted) {
      this.firstCase();
    }else if (this.firstBucket === this.secondBucket) {
      if (this.firstBucket && this.secondBucket != this.amountWanted) {
        this.secondCase();
      } else if (this.firstBucket && this.secondBucket === this.amountWanted) {
        this.thirdCase();
      }
    }else {
      this.fourthCase();
    }

  }

  // The first and second bucket are less than the amount wanted
  firstCase() {
    console.log("Can't be solve");
  }

  // The first and second bucket are equal but they are not equal to the amount wanted
  secondCase() {
    console.log("Can't be solve");
  }

  // The first and second bucket are equal to the amount wanted
  thirdCase() {
    console.log("Fill first or second bucket");
  }

  fourthCase() {
    do {
      if (this.firstBucket < this.secondBucket) {
        this.secondBucketSteps.push(this.secondBucket);
        this.firstBucketSteps.push(0);
        if (this.secondBucketSteps[this.secondBucketSteps.length - 1] === this.secondBucket) {
          this.firstBucketSteps.push(Math.min(this.firstBucket, ))
          this.secondBucketSteps.push(this.secondBucketSteps[this.secondBucketSteps.length - 1] - this.firstBucket)
          if (this.firstBucketSteps[this.firstBucketSteps.length - 1] >= this.secondBucketSteps[this.secondBucketSteps.length - 1]) {
            this.firstBucketSteps.push(0);
            this.secondBucketSteps.push(this.secondBucketSteps[this.secondBucketSteps.length - 1]);
            if (this.firstBucketSteps[this.firstBucketSteps.length - 1] === 0) {
              this.firstBucketSteps
            }
          }
        }
      }
    } while (this.firstBucketSteps[this.firstBucketSteps.length - 1] || this.secondBucketSteps[this.secondBucketSteps.length - 1] != this.amountWanted)
  }

}
