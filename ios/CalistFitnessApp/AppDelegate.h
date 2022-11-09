//#if __has_include(<React/RCTBridgeDelegate.h>)
//#import <React/RCTBridgeDelegate.h>
//#else
//#import "RCTBridgeDelegate.h"
//#endif
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
