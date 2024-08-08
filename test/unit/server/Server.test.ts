import {Server} from "@/server";
import express, {Router} from "express";

describe("Server test suite", () => {

    let server: Server

    beforeAll(() => {
        server = new Server();
    })

    it('Start and stop server', function () {




    });

    it('Test added router to server', function () {
        // server.addMiddleware((req, res, next) => {
        //
        // })
    });

    it('Test added middleware to server', function () {

    });

});