import { UserAnotherMiddleware } from './user-another.middleware';

describe('UserAnotherMiddleware', () => {
  it('should be defined', () => {
    expect(new UserAnotherMiddleware()).toBeDefined();
  });
});
