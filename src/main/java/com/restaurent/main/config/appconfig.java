//package com.restaurent.main.config;
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import com.restaurent.main.filter.filter;
//import com.restuarent.main.service.myuserDetailservice;
//@Configuration
//@EnableWebSecurity
//public class appconfig 
//{    @Autowired
//	myuserDetailservice myuserDetailservice;
//     @Autowired
//    filter filter;
//	@Bean
//	 PasswordEncoder passwordEncoder()
//	{
//		return new BCryptPasswordEncoder();
//	}
//	
//	@Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//
//        authProvider.setUserDetailsService(myuserDetailservice);
//        authProvider.setPasswordEncoder(passwordEncoder());
//
//        return authProvider;
//    }
//	
//	@Bean
//	public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception
//	{
//		return config.getAuthenticationManager();
//	}
//	@Bean
//	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//	    http.csrf().disable()
//	        .authorizeRequests(authorizeRequests ->
//	            authorizeRequests
//	                .requestMatchers("/login", "/register").permitAll()
//	                .requestMatchers("/api/**").authenticated()
//	        )
//	        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//	        .and()
//	        .authenticationProvider(authenticationProvider())
//	        .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//
//	    return http.build();
//	}
//	}
//
