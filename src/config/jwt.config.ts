import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: 'bkdbaidbdnmasd123y123v',
  signOptions: {
    expiresIn: '5min',
  },
}));
