package com.cos.blog.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
