import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';


@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent implements OnInit {
  postOfUser: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.id).subscribe(value1 => {
        this.postOfUser = value1;
      });
    });

  }

  ngOnInit(): void {
  }

}
