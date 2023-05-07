import { Controller, Request, Get, Post, UseGuards,Res } from '@nestjs/common';
import { AppService } from './app.service';
//import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import * as path from 'path';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @Get()
  serveReactApp(@Res() res: any) {
    console.log("serveReactApp")
    res.sendFile(path.join(__dirname, '..', "client\\public", 'index.html'));
  }

  // @Get()
  // getHello(): string {
  //   console.log("process.env.ATLAS_URISTRING",process.env.ATLAS_URISTRING)
  //   return this.appService.getHello();
  // }

  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log("auth/login")
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile2')
  getProfile(@Request() req) {
    return req.user;
  }
}
