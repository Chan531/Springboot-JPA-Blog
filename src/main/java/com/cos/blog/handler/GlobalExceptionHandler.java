package com.cos.blog.handler;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice // 어디에서든 이 클래스로 오게끔 할 수 있는 어노테이션
@RestController
public class GlobalExceptionHandler {

	@ExceptionHandler(value = Exception.class)
	public String handleArgumentException(Exception e) {
		return "<h1>" + e.getMessage() + "</h1>";
	}
}
