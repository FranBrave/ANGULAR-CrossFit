import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  user?: User | null;
  firstName: string = '';
  lastName1: string = '';
  lastName2: string = '';

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.loadUserData(user.uid);
      }
    });
  }

  ngOnInit(): void {
  }

  loadUserData(uid: string) {
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
    onValue(userRef, (snapshot: DataSnapshot) => {
      const userData = snapshot.val();
      if (userData) {
        this.firstName = userData.firstName || '';
        this.lastName1 = userData.lastName1 || '';
        this.lastName2 = userData.lastName2 || '';
      }
    });
  }
}
