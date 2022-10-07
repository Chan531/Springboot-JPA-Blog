package com.cos.blog.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.blog.model.User;
import com.cos.blog.repository.UserRepository;

// 스프링이 컴포넌트 스캔을 통해서 Bean에 등록을 해줌. Ioc를 해준다.
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	// 전체가 성공하면 커밋이 됨, 하나라도 실패하면 롤백이 됨
	@Transactional
	public void 회원가입(User user) {
		userRepository.save(user);
	}

	@Transactional(readOnly = true) // Select할 때 트랜잭션 시작, 서비스 종료 시에 트랜잭션 종료 (정합성 유지 가능)
	public User 로그인(User user) {
		return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	}
}
