export class SpotifyAuth{
  code: string;
  redirect_uri = 'http://localhost:4200/user';
  grant_type = 'authorization_code';
}
